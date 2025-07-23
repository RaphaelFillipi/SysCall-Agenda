import { ContactModalButtonProps } from "../../types/ContactModalButtonProps.type";

export function ContactModalButton({
  title,
  bgColor,
  textColor,
  ...rest
}: ContactModalButtonProps) {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center py-1 w-1/2 rounded-[6px] ${bgColor} ${textColor} border-2 border-green-dark`}
    >
      <span className="text-[12px]">{title}</span>
    </button>
  );
}
