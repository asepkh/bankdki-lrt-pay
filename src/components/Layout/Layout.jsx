import { Fragment } from "react";

import cn from "@/helpers/cn";

import Header from "./Header";

const Layout = ({ headerTitle, headerClassName, className, children }) => {
  return (
    <Fragment>
      <Header title={headerTitle} className={headerClassName} />
      <div className={cn("flex flex-col", className)}>{children}</div>
    </Fragment>
  );
};

export default Layout;
