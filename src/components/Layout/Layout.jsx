import { Fragment } from "react";

import cn from "@/helpers/cn";

import Header from "./Header";

const Layout = ({
  headerTitle,
  headerClassName,
  headerDivider,
  className,
  children,
  onBack = () => {},
  backIcon = "/arrow-left.svg",
  backIconClassName,
}) => {
  return (
    <Fragment>
      <Header
        title={headerTitle}
        className={headerClassName}
        divider={headerDivider}
        onBack={onBack}
        backIcon={backIcon}
        backIconClassName={backIconClassName}
      />
      <div className={cn("flex flex-col", className)}>{children}</div>
    </Fragment>
  );
};

export default Layout;
