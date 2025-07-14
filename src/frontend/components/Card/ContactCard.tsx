import { CallButton } from "../Button/CallButton";
import { PersonImage } from "../Images/PersonImage";
import { ContactName } from "../Titles/ContactName";
import imgPath from "../../assets/imgs/person-01.svg";

export function ContactCard() {
  return (
    <div className="flex flex-row h-[130px] items-center space-x-5 rounded-md p-[8px] shadow-box-card hover:border-[1px] hover:border-green-primary">
      <PersonImage imgPath={imgPath} />
      <ContactName name="Ana Martins" />
      <div className="flex-1 flex pr-[10px] justify-end">
        <CallButton title="Ligar" />
      </div>
    </div>
  );
}
