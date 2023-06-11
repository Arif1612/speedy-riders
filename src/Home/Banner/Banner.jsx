import React from "react";
import { toast } from "react-toastify";

const Banner = () => {
  const handleCarDetails = () => {
    alert(
      "Discover a world of adrenaline-fueled excitement with our extensive range of sports toy cars. Whether your little one dreams of racing down the tracks in a Formula 1 car or conquering rugged terrains in a powerful off-roader, we have the perfect sports cars to fuel their imagination. With realistic designs, high-performance features, and durable construction, our sports cars are built to withstand endless hours of thrilling play. Let your child's imagination soar as they immerse themselves in the world of speed, competition, and victory. Get ready to ignite their passion for adventure and create unforgettable racing moments with our top-quality sports toy cars"
    );
  };

  const handleTrackDetails = () => {
    alert(
      "Rev up the excitement with our thrilling track toy collection. Designed to bring the ultimate racing experience to your home, our track toys feature intricate designs, challenging layouts, and exhilarating loops that will keep kids entertained for hours. Build your own epic racecourse, challenge your friends to high-speed showdowns, and experience the thrill of victory as you conquer every twist and turn. With durable materials and easy assembly, our track toys are built to withstand even the most intense racing action. Get ready to unleash your inner racer and create unforgettable racing moments with our adrenaline-pumping track toy collection."
    );
  };

  const handleFireTrackDetails = () => {
    alert(
      "Immerse yourself in the thrilling world of firefighting with our mini fire track. This captivating toy brings the excitement of rescue missions right into your hands, allowing you to race against time to put out fires and save the day. With its intricate detailing, realistic fire station, and winding track, our mini fire track offers endless imaginative play possibilities for young heroes. Set up your own emergency scenarios, activate the siren and lights, and navigate the track to reach the scene of the fire. Let your child's imagination soar as they embrace the role of a courageous firefighter, tackling challenges and fostering a sense of heroism and bravery."
    );
  };

  const handlePoliceCarDetails = () => {
    alert(
      "Experience the action-packed world of law enforcement with our police car toy. This dynamic and realistic toy captures the essence of police work, empowering young ones to create their own thrilling police adventures. Equipped with flashing lights, sirens, and authentic sound effects, our police car toy brings the excitement of the chase right into their hands. Let their imagination take the lead as they patrol the streets, respond to emergencies, and maintain law and order. With its sturdy construction and detailed design, our police car toy is built to withstand the toughest missions. Inspire a sense of justice and role-play as they apprehend imaginary criminals and protect the community. Whether they're playing alone or engaging in imaginative play with friends, our police car toy will ignite their creativity and provide endless hours of thrilling fun. It's time to buckle up, hit the streets, and let the adventures begin!"
    );
  };

  return (
    <div className="carousel w-full">
      {/* carousel 1 */}
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://images.unsplash.com/photo-1672467575273-2918d93d00ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          className="w-full"
        />

        <div className="absolute flex  items-center h-full  left-0  top-0 bg-gradient-to-r from-[#6e1202] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2 ">
            <h2 className="text-2xl md:text-6xl font-bold">Sports Car</h2>
            <p>
              Experience the thrill of speed and competition with our collection
              of sports toy cars. From sleek race cars to off-road adventurers,
              ignite your child's imagination and let the races begin!
            </p>
            <div>
              <button
                onClick={handleCarDetails}
                className="btn btn-outline btn-secondary"
              >
                Details
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-1/4 right-1/4 bottom-40">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* carousel 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1622209084254-329ccad018b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80"
          className="w-full"
        />

        <div className="absolute flex items-center h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2 ">
            <h2 className="text-2xl md:text-6xl font-bold">Truck</h2>
            <p>
              Unleash the excitement of racing with our track toy collection.
              From twisting loops to high-speed straightaways, our track toys
              offer endless hours of thrilling fun for kids of all ages
            </p>
            <div>
              <button
                onClick={handleTrackDetails}
                className="btn btn-outline btn-secondary"
              >
                Details
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-1/4 right-1/4 bottom-40">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* carousel 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1632435188816-1277a374e696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="w-full"
        />

        <div className="absolute flex  items-center h-full  left-0  top-0 bg-gradient-to-r from-[#200202] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2 ">
            <h2 className="text-2xl md:text-6xl font-bold">Mini Fire Track </h2>
            <p>
              Experience the excitement of firefighting adventures with our mini
              fire track. With its realistic design and action-packed features,
              little heroes can race to the rescue, extinguishing imaginary
              fires and saving the day in their own miniature firefighting
              world.
            </p>
            <div>
              <button
                onClick={handleFireTrackDetails}
                className="btn btn-outline btn-secondary"
              >
                Details
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-1/4 right-1/4 bottom-40">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* carousel 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1609395464110-7116592351c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="w-full"
        />

        <div className="absolute flex items-center h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2 ">
            <h2 className="text-2xl md:text-6xl font-bold">Police Car</h2>
            <p>
              Join the law enforcement and embark on thrilling adventures with
              our police car toy. With its sleek design, flashing lights, and
              realistic sound effects, little officers can race to the scene,
              maintain order, and uphold justice in their imaginative play
            </p>
            <div>
              <button
                onClick={handlePoliceCarDetails}
                className="btn btn-outline btn-secondary"
              >
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1/4 right-1/4 bottom-40">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
