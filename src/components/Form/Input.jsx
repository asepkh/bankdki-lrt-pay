import cn from "@/helpers/cn";

const Input = ({
  type = "text",
  className,
  containerClassName,
  error,
  placeholder,
  value,
  onClick,
  ...props
}) => {
  return (
    <div className={cn("w-full", containerClassName)}>
      <input
        type={type}
        className={cn(
          "w-full rounded bg-[#F7F7F7] px-[14px] py-3 text-sm placeholder:text-[#98A2B3]",
          "focus:outline-none focus:ring-0",
          type === "date" && [
            "[&::-webkit-calendar-picker-indicator]:absolute",
            "[&::-webkit-calendar-picker-indicator]:right-3",
            "[&::-webkit-calendar-picker-indicator]:top-1/2",
            "[&::-webkit-calendar-picker-indicator]:-translate-y-1/2",
            "relative flex items-center",
            "[&::-webkit-datetime-edit-fields-wrapper]:text-black",
          ],
          !value &&
            type === "date" &&
            "before:absolute before:left-[14px] before:text-[#98A2B3] before:content-[attr(placeholder)] [&::-webkit-datetime-edit]:opacity-0",
          className,
        )}
        placeholder={placeholder}
        onClick={(e) => {
          if (type === "date") {
            e?.target?.showPicker();
          }
          onClick?.(e);
        }}
        {...props}
      />
      {error && <span className="mt-1 text-xs text-[#E21A1A]">{error}</span>}
    </div>
  );
};

export default Input;
