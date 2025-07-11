import { SearchButton } from "../Button/SearchButton";
import iconOrderDesc from "../../assets/icons/icon-order-desc.svg";
import iconFilter from "../../assets/icons/icon-filter.svg";

export function SearchButtonGroupDesktop() {
  return (
    <div className="flex flex-row justify-between w-full pt-[50px] pb-[72px]">
      <div className="flex flex-row space-x-[50px]">
        <SearchButton
          icon={iconOrderDesc}
          title="Ordenar"
          alt="Ícone de Ordenar Contatos"
          sizeIcon="w-[20px] h-[20px]"
        />
        <SearchButton
          icon={iconFilter}
          title="Filtrar"
          alt="Ícone de Filtrar Contatos"
          sizeIcon="w-[16px] h-[16px]"
        />
      </div>
    </div>
  );
}
