import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CarDetails from "../../components/CarDetails/CarDetails";

const ShopByCategory = () => {
  const [sportsCar, setSportsCar] = useState([]);
  const [regularCar, setRegularCar] = useState([]);
  const [policeCar, setPoliceCar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sports")
      .then((res) => res.json())
      .then((data) => setSportsCar(data));
  });
  useEffect(() => {
    fetch("http://localhost:5000/regular")
      .then((res) => res.json())
      .then((data) => setRegularCar(data));
  });
  useEffect(() => {
    fetch("http://localhost:5000/cars")
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
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mb-5 mt-5">
            {sportsCar.map((sport) => (
              <CarDetails key={sport._id} sport={sport} category="sports"></CarDetails>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mb-5 mt-5">
            {regularCar.map((sport) => (
              <CarDetails key={sport._id} sport={sport} category="regular"></CarDetails>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mb-5 mt-5">
            {policeCar.map((sport) => (
              <CarDetails key={sport._id} sport={sport} category="cars"></CarDetails>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
