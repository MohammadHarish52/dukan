import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import "/src/App.css";

const SearchBar = () => {
  return (
    <div className="flex searchBar justify-between items-center absolute p-6 py-8 bg-white ">
      <div className="rightPay flex justify-center items-center">
        <h1 className="font-medium text-xl">Payouts</h1>
        <p className="flex justify-center items-center text-xs ml-4 mt-1 text-gray-600">
          {" "}
          <CiCircleQuestion />
          How it Works{" "}
        </p>
      </div>
      <div className="search relative flex flex-row items-center">
        <input
          type="text"
          placeholder="        Search Features, tutorials, etc."
          className="bg-gray-100 pl-10 pr-4 py-2 rounded-full text-sm"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 font-extrabold" />
      </div>

      <div className="icons flex justify-center items-center">
        <RiMegaphoneFill className="bg-gray-200 rounded-full text-4xl p-2 text-gray-600  m-1" />
        <FaCaretDown className="bg-gray-200 rounded-full text-4xl p-2 text-gray-600 m-1" />
      </div>
    </div>
  );
};

export default SearchBar;
