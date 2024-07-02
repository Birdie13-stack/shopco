import heroimg from "../assets/hero-img.png";

function Hero() {
  return (
    <div className="bg-herogrey w-full ">
      <div className="w-11/12 mx-auto md:flex md:gap-8 ">
        <div className="md:w-6/12 md:py-20 p-6 flex flex-col gap-6 items-start">
          <h1 className="md:text-7xl text-xl uppercase font-extrabold font-roboto">
            Find clothes that match your style
          </h1>
          <p className=" text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black rounded-full py-4 px-16 text-white">
            Shop Now
          </button>

          <div className="flex justify-between w-full gap-4">
            <div>
              <h1 className="font-bold md:text-4xl">200+</h1>
              <p>International Brands</p>
            </div>

            <div>
              <h1 className="font-bold md:text-4xl">2,000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h1 className="font-bold md:text-4xl">30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="md:w-6/12">
          <img src={heroimg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
