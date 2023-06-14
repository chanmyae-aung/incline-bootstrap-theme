import React from "react";
import hero from "../../assets/42.jpg";

const Image = () => {
  return (
    <main className="h-screen">
      <div
        className="w-screen h-screen brightness-50 bg-cover absolute -z-10"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h4 className="text-gray-400 text-sm">BY SIMPLEQODE</h4>
        <h2 className="text-4xl font-semibold my-5">Landing pages for any occasion</h2>
        <p className="text-gray-400 leading-8 text-center w-[60%]">
          Incline is set of landing and support pages aimed at helping companies
          promote new products and business launches.
        </p>
        <button>PURCHASE NOW</button>
      </div>
    </main>
  );
};

export default Image;
