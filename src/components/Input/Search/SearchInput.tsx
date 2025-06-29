import iconSearch from "../../../assets/icons/icon-search.svg";

export function SearchInput() {
  return (
    <div className="relative overflow-hidden rounded-[11px]">
      <input
        type="text"
        className="w-full py-2 pl-3 outline-none bg-white border-solid border-2 border-gray-primary rounded-[10px]"
        placeholder="Pesquisar"
      />
      <button className="absolute right-0 h-full px-5 border-solid border-r border-2 border-gray-primary">
        <img src={iconSearch} alt="Ícone de pesquisa" className="w-5 h-5" />
      </button>
    </div>
  );
}
