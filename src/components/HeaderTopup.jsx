import cn from "@/helpers/cn";

const HeaderTopup = ({ className, title }) => {
  return (
    <div className={cn("flex items-center gap-3 p-4", className)}>
      <div className="flex size-14 items-center justify-center rounded-full bg-[#0055B81A]">
        <img src="/wallet.svg" alt="wallet" />
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  );
};

export default HeaderTopup;
