import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CarDetails from "../../components/CarDetails/CarDetails";

const ShopByCategory = () => {
  const [sportsCar, setSportsCar] = useState([]);
  const [regularCar, setRegularCar] = useState([]);
  const [policeCar, setPoliceCar] = useState([]);

  useEffect(() => {
    fetch("https://speedy-rides-server.vercel.app/sports")
      .then((res) => res.json())
      .then((data) => setSportsCar(data));
  });
  useEffect(() => {
    fetch("https://speedy-rides-server.vercel.app/regular")
      .then((res) => res.json())
      .then((data) => setRegularCar(data));
  });
  useEffect(() => {
    fetch("https://speedy-rides-server.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setPoliceCar(data));
  });

  return (
    <div>
      <Tabs>
        <TabList className="text-center">
          <Tab>Sports Car</Tab>
          <Tab>Regular Car</Tab>
          <Tab>Police Car</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mb-5 mt-5">
            {sportsCar.map((sport) => (
              <CarDetails
                key={sport._id}
                sport={sport}
                category="sports"
              ></CarDetails>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mb-5 mt-5">
            {regularCar.map((sport) => (
              <CarDetails
                key={sport._id}
                sport={sport}
                category="regular"
              ></CarDetails>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mb-5 mt-5">
            {policeCar.map((sport) => (
              <CarDetails
                key={sport._id}
                sport={sport}
                category="cars"
              ></CarDetails>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
