import React from "react";
import hero from "../../assets/42.jpg";
import animate from 'animate.css'

const Image = () => {
  return (
    <main className="h-screen">
      <div
        className=" w-full h-full brightness-50 bg-hero absolute"
      ></div>
      <div className="h-screen flex flex-col items-center pt-40 px-5">
        <div className="h-80 flex flex-col justify-center items-center ">
          <h4 className="text-gray-400 text-sm animate__animated animate__fadeInUp">BY SIMPLEQODE</h4>
          <h2 className="text-4xl text-white text-center my-5 animate__animated animate__fadeInUp ">
            Landing pages for any occasion
          </h2>
          <p className="text-gray-400 leading-8 text-center lg:w-[80%] w-full animate__animated animate__fadeInUp">
            Incline is set of landing and support pages aimed at helping
            companies promote new products and business launches.
          </p>
        </div>
        <button className="px-5 py-3 text-white tracking-widest border mx-auto text-xs border-[#F5BA4B] animate__animated animate__fadeInUp">PURCHASE NOW</button>
      </div>
    </main>
  );
};

export default Image;
