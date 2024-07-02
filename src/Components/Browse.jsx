import React from "react";
import casual from "../assets/casual.png";
import formal from "../assets/formal.png";
import party from "../assets/party.png";
import gym from "../assets/gym.png";

function Browse() {
  return (
    <div className="bg-neutral-100 rounded-3xl mx-auto w-11/12 p-5">
      <h2 className="font-bold text-4xl my-10 uppercase text-center">
        Browse by dress style
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <img src={casual} alt="" className="h-full" />
        <img src={formal} alt="" className="col-span-2 w-full" />
        <img src={party} alt="" className="col-span-2 w-full" />
        <img src={gym} alt="" className="h-full" />
      </div>
    </div>
  );
}

export default Browse;
