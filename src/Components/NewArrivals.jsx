import React from "react";
import blacktee from "../assets/blacktee.png";
import jeans from "../assets/jeans.png";
import checkered from "../assets/checkered-shirt.png";
import striped from "../assets/striped-tee.png";
import threefivestars from "../assets/3.5stars.png";
import fourfivestars from "../assets/4.5stars.png";

function NewArrivals() {
  return (
    <div className="my-10">
      <h2 className="font-bold text-5xl	text-center">New Arrivals</h2>

      <div className="flex mt-10 gap-10 w-11/12 mx-auto">
        <div>
          <img src={blacktee} alt="T-shirt with Tape details" />
          <div>
            <h3 className="font-bold">T-shirt with Tape details</h3>
            <img
              src={fourfivestars}
              alt=""
              className="inline-block mr-2 text-slate-400"
            />
            <span className="text-sm text-slate-500">4.5/5</span>
            <p className="font-bold text-lg">$120</p>
          </div>
        </div>

        <div>
          <img src={jeans} alt="Skinny Fit Jeans" />
          <div>
            <h3 className="font-bold">Skinny Fit Jeans</h3>
            <img src={threefivestars} alt="" className="inline-block mr-2" />
            <span className="text-sm text-slate-500">3.5/5</span>
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">
                $160{" "}
                <span className="font-normal line-through text-black/25">
                  $200
                </span>
              </p>
              <div className="bg-red-50 w-fit py-1 px-4 rounded-full">
                <p className="text-red-500">-20%</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={checkered} alt="Checkered Shirt" />
          <div>
            <h3 className="font-bold">Checkered Shirt</h3>
            <img src={fourfivestars} alt="" className="inline-block mr-2" />
            <span className="text-sm text-slate-500">4.5/5</span>
            <p className="font-bold text-lg">$180</p>
          </div>
        </div>

        <div>
          <img src={striped} alt="Sleeve Striped T-shirt" />
          <div>
            <h3 className="font-bold">Sleeve Striped T-shirt</h3>
            <img src={fourfivestars} alt="" className="inline-block mr-2" />
            <span className="text-sm text-slate-500">4.5/5</span>
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">
                $105{" "}
                <span className="font-normal line-through text-black/25">
                  $150
                </span>
              </p>
              <div className="bg-red-50 w-fit py-1 px-4 rounded-full">
                <p className="text-red-500">-30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full">
        <button className="py-4 px-20 border-2 ml-auto mr-auto rounded-full border-gray-300 border-solid hover:bg-neutral-100 hover:border-none">
          View all
        </button>
      </div>
    </div>
  );
}

export default NewArrivals;
