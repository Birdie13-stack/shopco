import React from "react";
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import ck from "../assets/calvin-klein.png";

function Brands() {
  return (
    <div className="bg-black px-10 py-8 flex gap-28 w-full">
      <img src={versace} alt="Versace Logo" />
      <img src={zara} alt="Zara Logo" />
      <img src={gucci} alt="Gucci Logo" />
      <img src={prada} alt="Prada Logo" />
      <img src={ck} alt="Calvin Klein Logo" />
    </div>
  );
}

export default Brands;
