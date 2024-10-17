import React from "react";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import style from './home.module.css'
import BrandIcons from "./BrandIcons/BrandIcons";
import WebTechnology from "./WebTechnology/WebTechnology";
import Tabview from "./TabView/Tabview";
import OurPortfolio from "./Portfolio/OurPortfolio";

const Home = () => {
  return (
    <>
    <Hero />
    <section className={style.middle}>
      <div className="container">
        <Banner />
        <BrandIcons />
        <WebTechnology />
        <Tabview />
      </div>
    </section>
    <section className={style.projects}>
      <div className="container">
        <OurPortfolio />
      </div>
    </section>
    </>
  );
};

export default Home;
