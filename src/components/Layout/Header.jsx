import { Fragment } from "react";

import cn from "@/helpers/cn";

const Header = ({
  title,
  className,
  divider = false,
  onBack,
  backIcon = "/arrow-left.svg",
  backIconClassName,
}) => {
  return (
    <Fragment>
      <header
        className={cn(
          "flex items-center gap-[14px] p-5 text-lg font-semibold",
          className,
        )}
      >
        <button onClick={onBack}>
          <img
            src={backIcon}
            alt="arrow-left"
            className={cn("size-[30px]", backIconClassName)}
          />
        </button>
        {title}
      </header>
      {divider && <div className="mx-3 -mt-1 border-b border-[#EAECF0]" />}
    </Fragment>
  );
};

export default Header;
