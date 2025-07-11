import { SearchInput } from "../components/Input/SearchInput";
import { SearchButtonGroupMobile } from "../components/Button/SearchButtonGroupMobile";
import { SearchButtonGroupDesktop } from "../components/Button/SearchButtonGroupDesktop";

export function Contact() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="p-2">Menu</div>
      <div className="relative flex w-full overflow-hidden pt-5 md:pt-[50px] justify-center">
        <div className="flex flex-col h-full w-full md:w-[70%] max-w-[1000px]">
          <div className="px-4 md:px-1">
            <SearchInput />
          </div>

          <div className="w-full md:hidden px-4">
            <SearchButtonGroupMobile />
          </div>
          <div className="w-full hidden md:block md:px-1">
            <SearchButtonGroupDesktop />
          </div>
        </div>
      </div>
    </div>
  );
}
