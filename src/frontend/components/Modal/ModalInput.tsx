import { ModalInputProps } from "../../types/ModalInputProps.type";

export function ModalInput({
  label,
  type,
  textColor,
  ...rest
}: ModalInputProps) {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label className="font-semibold text-[12px] text-black">{label}</label>
      <input
        type={type}
        className={`border-[1px] border-green-second w-full px-3 py-1.5 rounded-[8px] outline-none ${textColor}`}
        {...rest}
      />
    </div>
  );
}
