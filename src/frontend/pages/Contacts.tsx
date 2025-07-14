import { SearchInput } from "../components/Input/SearchInput";
import { ContactCard } from "../components/Card/ContactCard";
import { SearchButtonGroupMobile } from "../components/Button/SearchButtonGroupMobile";
import { SearchButtonGroupDesktop } from "../components/Button/SearchButtonGroupDesktop";

export function Contact() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="p-2">Menu</div>
      <div className="relative flex w-full overflow-hidden pt-5 md:pt-[50px] justify-center">
        <div className="flex flex-col h-full md:w-[70%] max-w-[1000px]">
          <div className="px-3 md:px-1">
            <SearchInput />
          </div>

          <div className="w-full md:hidden px-4">
            <SearchButtonGroupMobile />
          </div>
          <div className="w-full hidden md:block md:px-1">
            <SearchButtonGroupDesktop />
          </div>

          <div className="overflow-auto hide-scrollbar flex-1">
            <div className="flex-1 w-full md:w-5/6 lg:w-full grid lg:grid-cols-2 gap-x-16 gap-y-5 px-3 md:px-1 pt-1 pb-5 mx-auto">
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
