"use client";

import { useState } from "react";

import Button from "@/components/Button";
import cn from "@/helpers/cn";

const InputPhoneNumberOTP = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState("08583932854");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setPhoneNumber(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(phoneNumber);
    }
  };

  return (
    <div className="mb-7 w-full">
      <label htmlFor="phone" className="mb-2 block text-xs font-bold">
        Nomor Telepon
      </label>
      <div className="relative">
        <input
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full border border-[#D4431C] p-4 text-sm text-[#E21A1A]",
            "focus:outline-none focus:ring-0",
          )}
        />
        <Button
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 rounded-[5px] bg-[#E21A1A] px-[9px] py-[6px] text-xs text-white",
            "!h-fit !w-fit hover:bg-[#E21A1A] focus:outline-none focus:ring-0",
          )}
          onClick={() => onSubmit(phoneNumber)}
        >
          Kirim OTP
        </Button>
      </div>
    </div>
  );
};

export default InputPhoneNumberOTP;
