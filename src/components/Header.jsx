import Logo from "../assets/icons/emomentlogo.svg";
import { IoMdSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-white sm:shadow-none p-2 flex justify-between items-center">
      <MobileNav />
      <img
        src={Logo}
        className="mr-12 sm:mr-0 xl:ml-12 "
        alt="logo"
        width={150}
        height={150}
      />
      <div className="hidden w-[70%] md:w-[60%] xl:mr-12 xl:w-[35%] text-center sm:flex items-center justify-between">
        <div className="flex items-center border-2 border-orange">
          <input
            type="text"
            placeholder="Enter any item..."
            className="text-gray-400 p-1"
          />
          {/* <img src="" /> */}
          <div className="bg-orange text-white p-2">
            <IoMdSearch />
          </div>
        </div>
        <button className="rounded-3xl pr-2 pl-2 border-2 border-orange text-orange cursor-pointer">
          LOG IN
        </button>
        <button className="rounded-3xl pr-2 pl-2 pt-1 pb-1 bg-orange text-white cursor-pointer">
          SIGN IN
        </button>
      </div>
      <div className="sm:hidden cursor-pointer hover:text-orange">
        <BsBag />
      </div>
    </header>
  );
};

export default Header;
