import { ContactNameProps } from "../../types/titles/ContactNameProps.type";

export function ContactName({ name }: ContactNameProps) {
  return (
    <h1 className="font-bold text-gray-dark text-lg md:text-[24px]">{name}</h1>
  );
}
