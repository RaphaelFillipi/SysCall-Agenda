import { SearchButton } from "./SearchButton";
import { AddContactButton } from "./AddContactButton";
import iconOrderDesc from "../../assets/icons/icon-order-desc.svg";
import iconFilter from "../../assets/icons/icon-filter.svg";
import iconAddContact from "../../assets/icons/icon-add-contact.svg";

export function SearchButtonGroupMobile() {
  return (
    <div className="w-full py-10 space-y-8">
      <div className="flex justify-end">
        <AddContactButton
          icon={iconAddContact}
          title="Adicionar Contato"
          alt="Ícone de Adicionar Contato"
        />
      </div>

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
