import { OTPInput } from "input-otp";
import { useCallback } from "react";

import cn from "@/helpers/cn";
import debounce from "@/helpers/debounce";

const InputPin = ({ onSubmit, className, value, onChange }) => {
  const handleComplete = useCallback(
    debounce((value) => {
      onSubmit?.(value);
    }, 200),
    [onSubmit],
  );

  return (
    <div className={cn("flex w-full flex-col items-center gap-8", className)}>
      <OTPInput
        value={value}
        onChange={onChange}
        onComplete={handleComplete}
        maxLength={6}
        render={({ slots }) => (
          <div className="flex gap-3">
            {slots.map((slot, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex h-12 w-11 items-center justify-center border border-b-4 border-[#D4431C] text-xl",
                )}
              >
                {slot.char || ""}
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default InputPin;
