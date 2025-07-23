import { AddContactButtonProps } from "../../types/button/AddContactButtonProps.type";

export function AddContactButton({
  icon,
  title,
  alt,
  ...rest
}: AddContactButtonProps) {
  return (
    <button
      className={
        "inline-flex items-center justify-center py-2 rounded-[9px] space-x-[10px] bg-green-dark text-white-primary border-green-dark  font-extrabold px-3"
      }
      {...rest}
    >
      <img src={icon} alt={alt} className="w-[20px] h-[20px]" />
      <div>
        <span className="text-sm">{title}</span>
      </div>
    </button>
  );
}
