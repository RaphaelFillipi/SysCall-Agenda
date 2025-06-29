import { SearchButtonProps } from "../../types/button/SearchButtonProps.type";

export function SearchButton({
  icon,
  title,
  alt,
  bgcolor,
  textColor,
  sizeIcon,
}: SearchButtonProps) {
  return (
    <button
      className={`flex flex-row ${bgcolor} ${textColor} justify-center items-center border-solid border-2 border-green-dark  w-1/2 h-9 rounded-[7px] text-sm font-extrabold`}
    >
      <img src={icon} alt={alt} className={`pr-2 ${sizeIcon}`} />
      {title}
    </button>
  );
}
