import logo from "../assets/logo.png";
import arrow from "../assets/down-arrow.png";
import cart from "../assets/cart.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

import { IoIosMenu } from "react-icons/io";
function NavBar() {
  return (
    <div className="w-11/12 mx-auto flex items-center justify-between md:p-5 py-5 ">
      <img src={logo} alt="Logo" />
      <div className="md:flex items-center gap-2 hidden ">
        <Link to={"#"} className="flex items-center">
          Shop
        </Link>

        <img src={arrow} alt="text" />
      </div>
      <Link className="hidden md:block" to={"#"}>
        Sale
      </Link>
      <Link className="hidden md:block" to={"#"}>
        New Arrivals
      </Link>
      <Link className="hidden md:block" to={"#"}>
        Brands
      </Link>
      <div className="md:flex hidden gap-4 bg-cream w-6/12 p-4 rounded-full focus:shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="peer h-full w-full outline-none bg-cream text-base text-gray-700 align-middle	"
          type="text"
          id="search"
          placeholder="Search for products...."
        />
      </div>
      <div className="flex items-center gap-10">
        <img src={cart} alt="" />
        <img src={profile} alt="" />
        <IoIosMenu className="md:hidden block text-2xl" />
      </div>
    </div>
  );
}

export default NavBar;
