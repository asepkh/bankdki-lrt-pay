import cn from "@/helpers/cn";

const Copyright = ({ className }) => {
  return (
    <img
      src="/copyright.png"
      alt="powered-by-bank-dki"
      className={cn("w-[190px]", className)}
    />
  );
};

export default Copyright;
