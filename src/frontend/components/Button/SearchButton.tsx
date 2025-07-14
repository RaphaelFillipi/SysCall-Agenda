import { SearchButtonProps } from "../../types/button/SearchButtonProps.type";

export function SearchButton({
  icon,
  title,
  alt,
  sizeIcon,
}: SearchButtonProps) {
  return (
    <button className="flex items-center justify-center py-1 w-1/2 md:w-[140px] rounded-[9px] space-x-[10px] bg-transparent text-green-dark border-2 border-green-dark font-extrabold">
      <img src={icon} alt={alt} className={`${sizeIcon}`} />
      <span className="text-sm">{title}</span>
    </button>
  );
}
