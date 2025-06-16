import React from "react";
import whiteCar from "../../assets/white-car.png";  // placeholder, replace with your own images
import car2 from "../../assets/car5.png";            // placeholder, replace with your own images
import car3 from "../../assets/car6.png";
import sedan from "../../assets/sedan.png"            
import minisuv from "../../assets/minisuv.png"            
import suv from "../../assets/suv.png"            

const carList = [
  {
    name: "Sedan",
    price: 900,
    mileage: "10 km mileage",
    image: sedan,
  },
  {
    name: "Mini SUV",
    price: 1200,
    mileage: "10 km mileage",
    image: minisuv,
  },
  {
    name: "SUV",
    price: 1400,
    mileage: "8 km mileage",
    image: suv,
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Choose Your Ride
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Select from our affordable rental options suited to your journey.
        </p>

        {/* Car listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data) => (
            <div
              key={data.name}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px] mt-[20px]">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-[180px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>

              {/* Car Name & Price */}
              <div className="space-y-2">
                <h1 className="text-primary font-semibold">{data.name}</h1>
                <p className="text-xl font-semibold">₹{data.price}/Day</p>
              </div>

              {/* Mileage Tag */}
              <p className="text-lg font-semibold absolute top-0 left-3">
                {data.mileage}
              </p>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
