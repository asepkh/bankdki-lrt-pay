"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppLogo from "@/components/AppLogo";
import Copyright from "@/components/Copyright";
import InputPin from "@/components/Form/InputPin";
import Layout from "@/components/Layout";
import Popup from "@/components/Popup";
import cn from "@/helpers/cn";
import { encryptData, decryptData } from "@/helpers/encryption";
import { setUserData, setUserScreen } from "@/store/user/actions";

const CreatePinScreen = () => {
  const [pin, setPin] = useState("");
  const [showError, setShowError] = useState(false);

  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmitPin = (pin) => {
    if (pin.length !== 6) return;

    if (user.screen === "create-pin") {
      setPin("");
      const encryptedPin = encryptData(pin);
      dispatch(setUserData({ pin: encryptedPin }));
      dispatch(setUserScreen("confirm-pin"));
    } else {
      const storedPin = decryptData(user.pin);
      if (pin === storedPin) {
        router.push("/topup");
        setTimeout(() => {
          dispatch(setUserData({ isLoggedIn: true }));
          dispatch(setUserScreen("input-phone-number"));
        }, 500); // delay to prevent flashing
      } else {
        setPin("");
        setShowError(true);
      }
    }
  };

  return (
    <Layout
      headerTitle="LRT  X JakOne Pay"
      className="items-center px-3 pt-3"
      onBack={() =>
        dispatch(
          setUserScreen(
            user.screen === "create-pin" ? "registration" : "create-pin",
          ),
        )
      }
    >
      <AppLogo className="mb-6" />
      <h2 className="mb-6 text-lg">
        {user.screen === "create-pin"
          ? "Buat PIN kamu!"
          : "Konfirmasi PIN kamu!"}
      </h2>
      <InputPin
        onSubmit={handleSubmitPin}
        className="mb-10"
        value={pin}
        onChange={setPin}
      />
      {user.screen === "create-pin" && (
        <Fragment>
          <img src="/lrt-safe.png" alt="safe" className="mb-3 w-[238px]" />
          <span className="mb-10 w-[180px] text-center text-base">
            Seluruh informasi kamu terlindungi
          </span>
        </Fragment>
      )}
      <Copyright
        className={cn("mb-8", user.screen !== "create-pin" && "mt-[320px]")}
      />
      <Popup
        isOpen={showError}
        message="PIN yang kamu masukkan TIDAK SESUAI"
        onClose={() => setShowError(false)}
      />
    </Layout>
  );
};

export default CreatePinScreen;
