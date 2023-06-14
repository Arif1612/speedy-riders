import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Brands from "../Brands/Brands";
import OurProfessionals from "../OurProfessionals/OurProfessionals";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-3xl font-bold text-center mt-5 mb-12">Car Gallery</h2>
      <Gallery></Gallery>
      <h2 className="text-3xl font-bold text-center mt-16 mb-12">
        Shop By Category
      </h2>
      <ShopByCategory></ShopByCategory>
      <h2 className="text-3xl font-bold text-center mt-16 mb-12">
        Our Partners
      </h2>
      <Brands></Brands>
      <h2 className="text-3xl font-bold text-center mt-16 mb-12">
        Our Professionals
      </h2>
      <OurProfessionals></OurProfessionals>
    </div>
  );
};

export default Home;
