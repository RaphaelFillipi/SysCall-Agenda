import { ButtonWithKeyboardValuesProps } from "../../../types/button/ButtonWithKeyboardValuesProps.type";

export function ButtonWithKeyboardValues({
  value,
  onClick,
}: ButtonWithKeyboardValuesProps) {
  return (
    <button
      className="p-3 md:py-3 md:px-4 w-full rounded-[7px] text-gray-dark bg-gray-light md:text-[22px] md:hover:shadow-box"
      onClick={onClick}
    >
      <span>{value}</span>
    </button>
  );
}
