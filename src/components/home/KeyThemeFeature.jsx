import React from "react";
import responsive from "../../assets/icons8-responsive-64.png";
import sass from "../../assets/icons8-protect-96.png";
import contact from "../../assets/icons8-call-center-64.png";

const KeyThemeFeature = () => {
  return (
    <div className="bg-[#343A40] py-10">
      <div className="w-[40%] mx-auto mb-12">
        <h2 className="text-center text-white font-semibold text-2xl mt-20 my-7">
          Key Theme Features
        </h2>
        <p className=" text-center text-white text-sm">
          Incline can be used to create anything from a small marketing page to
          a sophisticated website.
        </p>
      </div>
      <div className="mb-20">
        <div className="flex text-white px-20">
          <div className="basis-1/3 flex flex-col px-5 text-center justify-center items-center">
            <img className="w-9" src={responsive} alt="" />
            <h2 className="font-semibold my-5">Fully Responsive</h2>
            <p className="text-sm">
              Looks great on all major browsers, tablets and mobile devices.
            </p>
          </div>
          <div className="basis-1/3 flex flex-col px-5 text-center justify-center items-center">
            <img className="w-9" src={sass} alt="" />
            <h2 className="font-semibold my-5">Build with SASS</h2>
            <p className="text-sm">
            Easily adjustable with tons of SASS variables included.
            </p>
          </div>
          <div className="basis-1/3 flex flex-col px-5 text-center justify-center items-center">
            <img className="w-9" src={contact} alt="" />
            <h2 className="font-semibold my-5">Free support</h2>
            <p className="text-sm">
            Feel free to contact us with any feature requests or bug reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyThemeFeature;
