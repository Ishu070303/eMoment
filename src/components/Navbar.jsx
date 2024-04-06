import { NavListItem } from "../../NavListData";
import Hamburger from "../assets/icons/hamburger.svg";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="sm:flex justify-between p-2 sm:bg-orange sm:sticky sm:top-12 z-50">
      <div className="sm:hidden border-2 border-orange w-1/2 flex justify-center m-auto">
        <input
          type="text"
          placeholder="Enter any Product"
          className="text-gray-400 p-1 w-[90%]"
        />
        {/* <img src="" /> */}
        <div className="bg-orange text-white p-2">
          <IoMdSearch />
        </div>
      </div>

      {/* for bigger screens (sm, md, lg) */}
      <div className="hidden w-screen sm:flex md:w-[65rem] justify-between items-center">
        <img src={Hamburger} alt="menu" />
        {NavListItem.map((item) => (
          <p
            className="text-[10px] md:text-xs xl:text-sm cursor-pointer text-white"
            key={item.label}
          >
            {item.label}
          </p>
        ))}
      </div>
      <button className="hidden xl:flex mr-4 border-none text-orange bg-white rounded-xl pl-2 pr-2 text-sm font-semibold">
        Affilate Zone
      </button>
    </nav>
  );
};

export default Navbar;
