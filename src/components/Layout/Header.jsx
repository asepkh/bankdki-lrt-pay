import { Fragment } from "react";

import cn from "@/helpers/cn";

const Header = ({ title, className, divider = false }) => {
  return (
    <Fragment>
      <header
        className={cn(
          "flex items-center gap-[10px] p-5 text-lg font-semibold",
          className,
        )}
      >
        <button>
          <img src="/arrow-left.svg" alt="arrow-left" />
        </button>
        {title}
      </header>
      {divider && <div className="mx-3 -mt-1 border-b border-[#EAECF0]" />}
    </Fragment>
  );
};

export default Header;
