import { OTPInput } from "input-otp";
import { useCallback, useEffect, useState } from "react";

import cn from "@/helpers/cn";
import debounce from "@/helpers/debounce";

const RESEND_TIME = 10; // countdown time in seconds

const InputOTP = ({ onSubmit, onResend }) => {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(RESEND_TIME);
  const [canResend, setCanResend] = useState(false);

  const handleComplete = useCallback(
    debounce((value) => {
      setOtp(value);
      onSubmit?.(value);
    }, 200),
    [onSubmit],
  );

  const handleResend = () => {
    if (!canResend) return;

    onResend?.();
    setCountdown(RESEND_TIME);
    setCanResend(false);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0 && !canResend) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown, canResend]);

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <OTPInput
        value={otp}
        onChange={setOtp}
        onComplete={handleComplete}
        maxLength={6}
        render={({ slots }) => (
          <div className="flex gap-8">
            {slots.map((slot, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex h-12 w-[26px] items-center justify-center border-b-[3px] border-[#D0D5DD] text-xl",
                )}
              >
                {slot.char || ""}
              </div>
            ))}
          </div>
        )}
      />

      <div className="flex w-full flex-col items-center gap-3">
        <span className="text-sm font-semibold">Tidak terima kode?</span>
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={cn(
            "text-xs",
            canResend ? "font-bold text-[#E21A1A]" : "font-normal",
          )}
        >
          {canResend
            ? "Kirim Ulang Kode"
            : `Kirim kode kembali dalam ${Math.floor(countdown / 60)
                .toString()
                .padStart(2, "0")}:${(countdown % 60)
                .toString()
                .padStart(2, "0")}`}
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
