import { AddContactButtonProps } from "../../types/button/AddContactButtonProps.type";

export function AddContactButton({ icon, title, alt }: AddContactButtonProps) {
  return (
    <button
      className={
        "flex flex-row justify-center items-center text-white-primary bg-green-dark px-3 py-2 rounded-[7px] text-sm font-extrabold"
      }
    >
      <img src={icon} alt={alt} className={`pr-2`} />
      {title}
    </button>
  );
}
