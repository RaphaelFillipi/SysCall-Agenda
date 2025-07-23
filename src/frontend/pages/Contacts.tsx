import { useState } from "react";
import { SearchInput } from "../components/Input/SearchInput";
import { SearchButtonGroupMobile } from "../components/Button/SearchButtonGroupMobile";
import { SearchButtonGroupDesktop } from "../components/Button/SearchButtonGroupDesktop";
import { ContactModal } from "../components/Modal/ContactModal";
import { ModalInput } from "../components/Modal/ModalInput";
import { ContactModalButton } from "../components/Modal/ContactModalButton";

export function Contact() {
  const [showAddContactModal, setShowAddContactModal] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="p-2">Menu</div>
      <div className="relative flex w-full overflow-hidden pt-5 md:pt-[50px] justify-center">
        <div className="flex flex-col h-full w-full md:w-[70%] max-w-[1000px]">
          <div className="px-4 md:px-1">
            <SearchInput />
          </div>

          <div className="w-full md:hidden px-4">
            <SearchButtonGroupMobile
              onClick={() => setShowAddContactModal(!showAddContactModal)}
            />
          </div>
          <div className="w-full hidden md:block md:px-1">
            <SearchButtonGroupDesktop
              onClick={() => setShowAddContactModal(!showAddContactModal)}
            />
          </div>
        </div>
      </div>

      {showAddContactModal && (
        <ContactModal
          className="bg-white-primary/20 backdrop-blur-[1px]"
          title="Adicionar Novo Contato"
        >
          <div className="flex flex-col space-y-3">
            <ModalInput label="Nome" type="text" textColor="text-black" />

            <ModalInput label="Telefone" type="text" textColor="text-black" />
          </div>

          <div className="flex flex-row justify-end space-x-6 pt-6">
            <ContactModalButton
              title="Cancelar"
              bgColor="bg-transparent"
              textColor="text-green-dark font-extrabold"
              onClick={() => setShowAddContactModal(!showAddContactModal)}
            />

            <ContactModalButton
              title="Adicionar"
              bgColor="bg-green-dark"
              textColor="text-white-primary font-bold"
            />
          </div>
        </ContactModal>
      )}
    </div>
  );
}
