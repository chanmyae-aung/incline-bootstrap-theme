import React from "react";
import one from "../../assets/carousel-01.jpg";
import two from "../../assets/carousel-2.jpg";
import three from "../../assets/carousel-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <main className="h-screen">
      <div className="w-screen h-screen">
        <Swiper
          pagination={{ clickable: true }}
          // effect={"fade"}
          loop={true}
          controller={true}
          navigation={true}
          // autoplay={{ delay: 5000 }}
          speed={400}
          modules={[Autoplay, Pagination, Navigation ]}
        >
          <SwiperSlide>
            <img
              className="w-full brightness-50 absolute -z-10 h-screen object-cover"
              src={one}
              alt=""
            />
            <div className="h-screen flex flex-col pt-40 ">
              <div className="h-80 flex flex-col justify-center items-center ">
                <h4 className="text-gray-400 text-sm ">BY SIMPLEQODE</h4>
                <h2 className="text-4xl my-5  ">
                  Landing pages for any occasion
                </h2>
                <p className="text-gray-400 leading-8 text-center w-[50%] ">
                  Incline is set of landing and support pages aimed at helping
                  companies promote new products and business launches.
                </p>
              </div>
              <button className="px-5 py-3 tracking-widest border mx-auto text-xs border-[#F5BA4B] ">
                PURCHASE NOW
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full brightness-50 absolute -z-10 h-screen object-cover" src={two} alt="" />
            <div className="h-screen flex flex-col pt-40">
              <div className="h-80 flex flex-col justify-center items-center ">
                <h4 className="text-gray-400 text-sm">BY SIMPLEQODE</h4>
                <h2 className="text-4xl my-5">
                Powerful design tool
                </h2>
                <p className="text-gray-400 leading-8 text-center w-[50%]">
                Create beautiful websites from scratch with multiple pre-built pages and styled components.
                </p>
              </div>
              <button className="px-5 py-3 tracking-widest border mx-auto text-xs border-[#F5BA4B]">
                PURCHASE NOW
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-screen object-cover brightness-50 absolute -z-10" src={three} alt="" />
            <div className="h-screen flex flex-col pt-40">
              <div className="h-80 flex flex-col justify-center items-center ">
                <h4 className="text-gray-400 text-sm">BY SIMPLEQODE</h4>
                <h2 className="text-4xl my-5">
                Build anything with Incline
                </h2>
                <p className="text-gray-400 leading-8 text-center w-[50%]">
                Create beautiful websites from scratch with multiple pre-built pages and styled components.
                </p>
              </div>
              <button className="px-5 py-3 tracking-widest border mx-auto text-xs border-[#F5BA4B]">
                PURCHASE NOW
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Carousel;
