import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-3xl font-bold text-center mt-5 mb-12">Car Gallery</h2>
      <Gallery></Gallery>
      <h2 className="text-3xl font-bold text-center mt-16 mb-12">Shop By Category </h2>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
