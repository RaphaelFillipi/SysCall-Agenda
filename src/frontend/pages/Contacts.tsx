import { SearchButton } from "../components/Button/SearchButton";
import { SearchInput } from "../components/Input/SearchInput";
import { AddContactButton } from "../components/Button/AddContactButton";
import iconOrderDesc from "../assets/icons/icon-order-desc.svg";
import iconFilter from "../assets/icons/icon-filter.svg";
import iconAddContact from "../assets/icons/icon-add-contact.svg";
import { ContactCard } from "../components/Card/ContactCard";
import { NumericKeyboard } from "../components/Button/NumericKeyboard";

export function Contact() {
  return (
    <div className="relative flex flex-col max-h-screen overflow-hidden p-6">
      <div>
        <SearchInput />
      </div>
      <div className="py-10 space-y-5">
        <div className="flex justify-end">
          <AddContactButton
            icon={iconAddContact}
            title="Adicionar Contato"
            alt="Ícone de Adicionar Contato"
          />
        </div>

        <div className="flex flex-row space-x-4 justify-center">
          <SearchButton
            icon={iconOrderDesc}
            title="Ordenar"
            alt="Ícone de Ordenar Contatos"
            bgcolor={"bg-white"}
            textColor={"text-green-dark"}
            sizeIcon={"w-7 h-7"}
          />
          <SearchButton
            icon={iconFilter}
            title="Filtrar"
            alt="Ícone de Filtrar Contatos"
            bgcolor={"bg-white"}
            textColor={"text-green-dark"}
            sizeIcon={"w-6 h-4"}
          />
        </div>
      </div>

      <div className="overflow-auto hide-scrollbar">
        <div className="flex flex-col space-y-4 p-1">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>

      <div className="fixed right-0 bottom-0 p-5">
        <NumericKeyboard />
      </div>
    </div>
  );
}
