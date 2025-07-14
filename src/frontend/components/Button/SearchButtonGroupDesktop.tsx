import { SearchButton } from "./SearchButton";
import { AddContactButton } from "./AddContactButton";
import iconOrderDesc from "../../assets/icons/icon-order-desc.svg";
import iconFilter from "../../assets/icons/icon-filter.svg";
import iconAddContact from "../../assets/icons/icon-add-contact.svg";

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

      <AddContactButton
        icon={iconAddContact}
        title="Adicionar Contato"
        alt="Ícone de Adicionar Contato"
      />
    </div>
  );
}
