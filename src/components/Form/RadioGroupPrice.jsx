import cn from "@/helpers/cn";

const priceOptions = [
  { value: "50000", label: "Rp50.000" },
  { value: "100000", label: "Rp100.000" },
  { value: "150000", label: "Rp150.000" },
  { value: "200000", label: "Rp200.000" },
  { value: "250000", label: "Rp250.000" },
  { value: "300000", label: "Rp300.000" },
];

const RadioGroupPrice = ({
  value,
  onChange,
  className,
  options = priceOptions,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 border-y border-[#E4E4E4] px-5 py-4",
        className,
      )}
    >
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            "flex cursor-pointer items-center gap-3 rounded-lg border p-3",
            "transition-colors duration-200",
            value === option.value
              ? "border-[#E21A1A] bg-[#E21A1A]/5"
              : "border-[#EAECF0] hover:border-[#E21A1A]/50",
          )}
        >
          <input
            type="radio"
            name="price"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            className="hidden"
          />
          <div className="flex size-10 items-center justify-center rounded-full bg-[#0055B81A]">
            <img src="/wallet.svg" alt="wallet" className="size-5" />
          </div>
          <span className="text-sm font-semibold">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroupPrice;
