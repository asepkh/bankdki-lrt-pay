import cn from "@/helpers/cn";

const InputCurrency = ({
  onChange,
  value,
  error,
  helper = "Minimum top up amount Rp 20.000",
  className,
  ...props
}) => {
  const handleChange = (e) => {
    // Remove non-digit characters and leading zeros
    const rawValue = e.target.value.replace(/[^\d]/g, "").replace(/^0+/, "");
    onChange?.(rawValue);
  };

  // Format number with thousand separator
  const formatValue = (val) => {
    if (!val) return "";
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="w-full">
      <h2 className="text-sm font-bold">Enter Another Amount</h2>

      <div className="relative mb-2 flex items-center py-3">
        <span className="mr-2 text-2xl font-bold">Rp</span>
        <input
          type="text"
          value={formatValue(value)}
          onChange={handleChange}
          className={cn(
            "w-full bg-transparent text-2xl font-bold focus:outline-none",
            className,
          )}
          {...props}
        />
      </div>

      <div
        className={cn(
          "flex items-center gap-1 text-xs text-[#98A2B3]",
          error && "!text-[#E21A1A]",
        )}
      >
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.833374C3.32 0.833374 0.333333 3.82004 0.333333 7.50004C0.333333 11.18 3.32 14.1667 7 14.1667C10.68 14.1667 13.6667 11.18 13.6667 7.50004C13.6667 3.82004 10.68 0.833374 7 0.833374ZM7 10.8334C6.63333 10.8334 6.33333 10.5334 6.33333 10.1667V7.50004C6.33333 7.13337 6.63333 6.83337 7 6.83337C7.36667 6.83337 7.66667 7.13337 7.66667 7.50004V10.1667C7.66667 10.5334 7.36667 10.8334 7 10.8334ZM7.66667 5.50004H6.33333V4.16671H7.66667V5.50004Z"
            fill="currentColor"
          />
        </svg>

        <span>{error || helper}</span>
      </div>
    </div>
  );
};

export default InputCurrency;
