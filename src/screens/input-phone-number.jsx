/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import AppLogo from "@/components/AppLogo";
import Copyright from "@/components/Copyright";
import InputPhoneNumberOTP from "@/components/Form/InputPhoneNumberOTP";
import Layout from "@/components/Layout";
import { setUserData, setUserScreen } from "@/store/user/actions";

const InputPhoneNumberScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmitPhoneNumber = (phoneNumber) => {
    dispatch(setUserData({ phoneNumber }));
    dispatch(setUserScreen("verify-otp"));
  };

  return (
    <Layout
      headerTitle="LRT X JakOne Pay"
      className="items-center px-6 pt-3"
      onBack={() => router.back()}
    >
      <AppLogo />
      <h2 className="mb-6 text-lg">Selamat Datang</h2>
      <span className="mb-3 w-full text-xs">
        Ekspresikan perjalananmu menggunakan LRT Pay
      </span>
      <InputPhoneNumberOTP onSubmit={onSubmitPhoneNumber} />
      <span className="mb-[228px] text-sm font-medium">
        Seluruh transaksi aman, dengan melanjutkan proses ini. Menu{" "}
        <a href="#" className="font-bold text-[#E21A1A]">
          syarat & ketentuan
        </a>{" "}
        yang berlaku
      </span>
      <Copyright />
    </Layout>
  );
};

export default InputPhoneNumberScreen;
