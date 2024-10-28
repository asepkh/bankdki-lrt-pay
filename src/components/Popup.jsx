/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import cn from "@/helpers/cn";

const Popup = ({ isOpen, message, onClose, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50">
      <div
        className={cn(
          "w-[80%] max-w-[252px] rounded-lg bg-white p-6 text-center shadow-lg",
          className,
        )}
      >
        <p className="mb-[74px] text-sm">{message}</p>
        <div className="p-3">
          <button
            onClick={onClose}
            className="w-full rounded bg-[#E21A1A] px-4 py-2 text-sm text-white"
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
