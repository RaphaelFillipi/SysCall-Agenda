import { CallButton } from "../Button/CallButton";
import { PersonImage } from "../Images/PersonImage";
import { ContactName } from "../Titles/ContactName";
import imgPath from "../../assets/imgs/person-01.svg";

export function ContactCard() {
  return (
    <div className="w-full h-[110px] rounded-md p-2 shadow-box-card">
      <div className="flex flex-row h-full items-center space-x-3">
        <PersonImage imgPath={imgPath} />
        <ContactName name="Ana Martins" />
        <CallButton title="Ligar" />
      </div>
    </div>
  );
}
