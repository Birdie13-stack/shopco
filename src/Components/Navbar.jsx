import React from "react";
import logo from "../assets/logo.png";
import arrow from "../assets/down-arrow.png";
import cart from "../assets/cart.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-5/6 mx-auto  flex items-center justify-between space-x-5 px-5 py-5 ">
      <img src={logo} alt="Logo" />
      <div className="flex items-center gap-2">
        <Link to={"#"} className="flex items-center">
          {" "}
          Shop{" "}
        </Link>

        <img src={arrow} alt="text" />
      </div>{" "}
      <Link to={"#"}> Sale</Link>
      <Link to={"#"}>New Arrivals</Link>
      <a href="#">Brands</a>
      <div className="flex gap-4 bg-cream w-6/12 p-4 rounded-full focus:shadow-md">
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
          className="peer h-full w-full outline-none bg-cream text-sm text-gray-700 "
          type="text"
          id="search"
          placeholder="Search for products"
        />
      </div>
      <div className="flex items-center gap-3">
        <img src={cart} alt="" />
        <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default NavBar;
