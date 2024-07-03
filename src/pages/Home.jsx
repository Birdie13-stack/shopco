import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import NewArrivals from "../Components/NewArrivals";
import TopSelling from "../Components/TopSelling";
import Browse from "../Components/Browse";
import Subscribe from "../Components/Subscribe";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Brands />
        <NewArrivals />
        <TopSelling />
        <Browse />
      </div>
    </>
  );
}

export default Home;
