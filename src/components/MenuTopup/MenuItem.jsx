import Link from "next/link";
import React from "react";

const MenuItem = ({ icon, title, description, name }) => {
  return (
    <Link href={`/topup/${name}`} className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[18px]">
          <div className="flex size-[55px] items-center justify-center rounded-full bg-menu">
            <img src={icon} alt={title} />
          </div>
          <div className="flex w-fit max-w-[170px] flex-col gap-1">
            <h3 className="text-xs font-semibold">{title}</h3>
            <p className="text-xs">{description}</p>
          </div>
        </div>
        <img
          src="/arrow-left-black.svg"
          alt="arrow-right"
          className="size-4 rotate-180"
        />
      </div>
      <span className="border-b border-[#F6F5F5]" />
    </Link>
  );
};

export default MenuItem;
