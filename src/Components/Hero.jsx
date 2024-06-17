import heroimg from "../assets/hero-img.png";

function Hero() {
  return (
    <div className="bg-herogrey w-full ">
      <div className="w-5/6 mx-auto flex gap-8">
        <div className="w-6/12 py-20 flex flex-col gap-6 items-start">
          <h1 className="text-7xl/[64px] w-173px uppercase font-extrabold font-roboto">
            Find clothes that match your style
          </h1>
          <p className="text-base text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black rounded-full py-4 px-16 text-white">
            Shop Now
          </button>

          <div className="flex justify-between w-full">
            <div>
              <h1 className="font-bold text-4xl">200+</h1>
              <p>Something Someting</p>
            </div>

            <div>
              <h1 className="font-bold text-4xl">2,000+</h1>
              <p>Something Someting</p>
            </div>
            <div>
              <h1 className="font-bold text-4xl">30,000+</h1>
              <p>Something Someting</p>
            </div>
          </div>
        </div>

        <div className="w-6/12">
          <img src={heroimg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
