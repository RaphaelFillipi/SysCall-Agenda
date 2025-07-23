import { SearchButtonProps } from "../../types/button/SearchButtonProps.type";

export function SearchButton({
  icon,
  title,
  alt,
  sizeIcon,
  ...rest
}: SearchButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center justify-center py-1 w-1/2 md:w-[140px] rounded-[9px] space-x-[10px] bg-transparent text-green-dark border-2 border-green-dark font-extrabold"
    >
      <img src={icon} alt={alt} className={`${sizeIcon}`} />
      <div>
        <span className="text-sm">{title}</span>
      </div>
    </button>
  );
}
