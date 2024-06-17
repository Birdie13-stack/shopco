import React from "react";
import heroimg from "../assets/hero-img.png";

function Hero() {
  return (
    <div className="bg-herogrey flex w-50%">
      <div>
        <h1 className="text-6xl/[64px] w-173px uppercase font-bold font-roboto">
          Find clothes that match your style
        </h1>
        <p className="text-base text-gray-100">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </div>

      <div>
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
