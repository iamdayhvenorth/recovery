import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="absolute top-[75px] right-[60px]">
      <div className="p-7 bg-white rounded-md w-[340px] relative after:absolute after:w-[15px] after:h-[15px] after:bg-white after:top-[-7px] after:right-[33px] after:rotate-45">
        <form className="bg-transparent w-full border border-[#dbdbdb] flex items-center gap-1 pr-1">
          <input
            type="text"
            placeholder="Search..."
            autoComplete="on"
            className="w-[90%] pl-5 py-3 focus:outline-none bg-transparent font-open-sans font-normal text-[#5f5f5f] text-sm"
          />
          <button className="bg-[#52c5b6] text-white hover:bg-black hover:text-white p-2 rounded-sm cursor-pointer transition-colors duration-500 ease-in">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
