import React from "react";
import Image from "../components/home/Image";
import Carousel from "../components/home/Carousel";
import Parallax from "../components/home/Parallax";
import { Outlet } from "react-router-dom";
import Landing from "../components/home/Landing";
import HeaderVarient from "../components/home/HeaderVarient";
import Quote from "../components/home/Quote";
import KeyThemeFeature from "../components/home/KeyThemeFeature";

const Home = () => {
  return (
    <div>
      <Outlet />
        <Landing />
        <HeaderVarient/>
        <Quote/>
        <KeyThemeFeature/>
    </div>
  );
};

export default Home;
