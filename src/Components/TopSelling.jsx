import React from "react";
import vert from "../assets/vert-stripe.png";
import courage from "../assets/courage.png";
import shorts from "../assets/shorts.png";
import fade from "../assets/fadedjeans.png";
import fourfivestars from "../assets/4.5stars.png";
import fivestars from "../assets/5stars.png";
import fourstars from "../assets/4stars.png";
import threestars from "../assets/3stars.png";

function TopSelling() {
  return (
    <div className="my-10">
      <h2 className="font-bold text-5xl	text-center">Top Selling</h2>
      <div className="flex mt-10 gap-10 w-11/12 mx-auto">
        <div>
          <img src={vert} alt="Vertical Striped Shirt" />
          <div>
            <h3 className="font-bold">Vertical Striped Shirt</h3>
            <img
              src={fivestars}
              alt=""
              className="inline-block mr-2 text-slate-400"
            />
            <span className="text-sm text-slate-500">5/5</span>
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">
                $200{" "}
                <span className="font-normal line-through text-black/25">
                  $250
                </span>
              </p>
              <div className="bg-red-50 w-fit py-1 px-4 rounded-full">
                <p className="text-red-500">-20%</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={courage} alt="Courage Graphic T-shirt" />
          <div>
            <h3 className="font-bold">Courage Graphic T-shirt</h3>
            <img src={fourstars} alt="" className="inline-block mr-2" />
            <span className="text-sm text-slate-500">4/5</span>
            <p className="font-bold text-lg">$145</p>
          </div>
        </div>

        <div>
          <img src={shorts} alt="Loose Fit Bermuda Shorts" />
          <div>
            <h3 className="font-bold">Loose Fit Bermuda Shorts</h3>
            <img src={threestars} alt="" className="inline-block mr-2" />
            <span className="text-sm text-slate-500">3/5</span>
            <p className="font-bold text-lg">$80</p>
          </div>
        </div>

        <div>
          <img src={fade} alt="Faded Skinny Jeans" />
          <div>
            <h3 className="font-bold">Faded Skinny Jeans</h3>
            <img src={fourfivestars} alt="" className="inline-block mr-2" />
            <span className="text-sm text-slate-500">4.5/5</span>
            <p className="font-bold text-lg">$210 </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center">
        <button className="py-4 px-20 border-2 ml-auto mr-auto rounded-full border-gray-300 border-solid hover:bg-neutral-100 hover:border-none">
          View all
        </button>
      </div>
    </div>
  );
}

export default TopSelling;
