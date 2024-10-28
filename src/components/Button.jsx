import React from "react";

import cn from "@/helpers/cn";

const Button = ({ children, className, isLoading, disabled, ...props }) => {
  return (
    <button
      className={cn(
        "relative h-[45px] w-full rounded bg-[#E21A1A] text-sm text-white disabled:bg-[#EBECEE] disabled:text-[#BDBDBD]",
        className,
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg className="size-5 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
