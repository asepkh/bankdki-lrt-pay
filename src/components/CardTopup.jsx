import React from "react";

const CardTopup = () => {
  return (
    <div className="mx-4 mb-4 flex flex-col gap-[2px] rounded-[10px] bg-[#F2F6FA] p-3">
      <h4 className="flex items-center gap-2 text-sm font-bold text-[#E21A1A]">
        <img src="/announcement.svg" alt="announcement" />
        Top Up Information
      </h4>
      <span className="pl-[22px] text-xs">
        You can save up to Rp 2.000.000 with maximum transactions of Rp
        20.000.000 per month
      </span>
    </div>
  );
};

export default CardTopup;
