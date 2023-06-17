import React from "react";
import hero from "../../assets/42.jpg";
import animate from 'animate.css'

const Image = () => {
  return (
    <main className="h-screen">
      <div
        className="w-screen h-screen brightness-50 bg-cover absolute -z-10"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className="h-screen flex flex-col pt-40">
        <div className="h-80 flex flex-col justify-center items-center ">
          <h4 className="text-gray-400 text-sm animate__animated animate__fadeInUp">BY SIMPLEQODE</h4>
          <h2 className="text-4xl my-5 animate__animated animate__fadeInUp">
            Landing pages for any occasion
          </h2>
          <p className="text-gray-400 leading-8 text-center w-[50%] animate__animated animate__fadeInUp">
            Incline is set of landing and support pages aimed at helping
            companies promote new products and business launches.
          </p>
        </div>
        <button className="px-5 py-3 tracking-widest border mx-auto text-xs border-[#F5BA4B] animate__animated animate__fadeInUp">PURCHASE NOW</button>
      </div>
    </main>
  );
};

export default Image;
