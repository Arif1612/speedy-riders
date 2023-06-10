import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-3xl font-bold text-center mt-5 mb-12">Car Gallery</h2>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
