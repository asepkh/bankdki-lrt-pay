"use client";

import { useSelector } from "react-redux";

import CreatePinScreen from "@/screens/create-pin";
import InputPhoneNumberScreen from "@/screens/input-phone-number";
import RegistrationScreen from "@/screens/registration";
import VerifyOTPScreen from "@/screens/verify-otp";

const RegistrationPage = () => {
  const userScreen = useSelector((state) => state.user?.screen);

  switch (userScreen) {
    case "input-phone-number":
      return <InputPhoneNumberScreen />;
    case "verify-otp":
      return <VerifyOTPScreen />;
    case "registration":
      return <RegistrationScreen />;
    case "create-pin":
      return <CreatePinScreen />;
    case "confirm-pin":
      return <CreatePinScreen />;
    default:
      return <InputPhoneNumberScreen />;
  }
};

export default RegistrationPage;
