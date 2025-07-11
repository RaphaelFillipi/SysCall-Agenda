import { SearchButton } from "./SearchButton";
import iconOrderDesc from "../../assets/icons/icon-order-desc.svg";
import iconFilter from "../../assets/icons/icon-filter.svg";

export function SearchButtonGroupMobile() {
  return (
    <div className="w-full py-10 space-y-8">
      <div className="flex flex-row space-x-4 py-[10px] justify-center">
        <SearchButton
          icon={iconOrderDesc}
          title="Ordenar"
          alt="Ícone de Ordenar Contatos"
          sizeIcon="w-[24px] h-[24px]"
        />
        <SearchButton
          icon={iconFilter}
          title="Filtrar"
          alt="Ícone de Filtrar Contatos"
          sizeIcon="w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
}
