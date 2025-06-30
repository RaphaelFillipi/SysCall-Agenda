import { CallButtonProps } from "../../types/button/CallButtonProps.type";

export function CallButton({ title }: CallButtonProps) {
  return (
    <button className="bg-green-second py-1.5 px-6 text-[13px] text-white-primary font-bold rounded-md">
      {title}
    </button>
  );
}
