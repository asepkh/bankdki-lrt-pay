import cn from "@/helpers/cn";

const AppLogo = ({ className }) => {
  return (
    <img
      src="/logo-lrt.png"
      alt="lrt-x-jakone-pay"
      className={cn("mb-6 h-auto w-[185px]", className)}
    />
  );
};

export default AppLogo;
