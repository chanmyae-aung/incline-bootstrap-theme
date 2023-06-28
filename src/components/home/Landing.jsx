import React from "react";
import { landingData } from "../../constant/welcome/index";
import {MdRestore} from 'react-icons/md'

const Landing = () => {
  return (
    <main>
      <div className="w-[45%] mx-auto mb-12">
        <h2 className="text-center font-semibold text-2xl mt-20 my-10">
          Landing page variants
        </h2>
        <p className=" text-center text-gray-400">
          Incline comes with several professionally designed landing pages that
          can be easily adapted for any project.
        </p>
      </div>
        <div className="w-[90%] mx-auto">
        <div className="flex flex-row w-full flex-wrap ">
          {landingData.map((item) => {
            return (
              <div key={item.id} className="px-5 basis-1/3">
                {item.image ? (
                  <img className="transition-all hover:-translate-y-2 hover:shadow-2xl duration-300" src={item.image} alt="" />
                ) : (
                  <div className=" bg-gray-200 h-[223px] flex justify-center items-center">
                    <MdRestore className="text-gray-400 text-4xl"/>
                  </div>
                )}
               <div className={`w-72 mx-auto my-10 ${item.id === 8 && "text-gray-300"}`}>
               <h4 className="font-semibold mb-5">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
               </div>
              </div>
            );
          })}
        </div>
        </div>
    </main>
  );
};

export default Landing;
