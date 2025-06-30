import { ContactNameProps } from "../../types/titles/ContactNameProps.type";

export function ContactName({ name }: ContactNameProps) {
  return <h1 className="font-extrabold text-gray-dark text-lg">{name}</h1>;
}
