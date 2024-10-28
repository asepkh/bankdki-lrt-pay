"use client";

import { useDispatch } from "react-redux";

import InputOTP from "@/components/Form/InputOTP";
import Layout from "@/components/Layout";
import { setUserScreen } from "@/store/user/actions";

const VerifyOTPScreen = () => {
  const dispatch = useDispatch();

  const handleSubmitOTP = (otp) => {
    console.log("OTP submitted:", otp);
    dispatch(setUserScreen("registration"));
  };

  const handleResendOTP = () => {
    console.log("Resending OTP...");
  };

  return (
    <Layout
      headerTitle="Verifikasi Kode OTP"
      className="items-center px-3 pt-8"
      onBack={() => dispatch(setUserScreen("input-phone-number"))}
    >
      <p className="mb-8 text-sm font-medium text-[#75788d]">
        Masukkan 6 digit kode yang sudah dikirim ke nomor kamu dibawah ini ya!
        <br />
        <span className="text-[#E21A1A]">085839328544</span>
      </p>

      <InputOTP onSubmit={handleSubmitOTP} onResend={handleResendOTP} />
    </Layout>
  );
};

export default VerifyOTPScreen;
