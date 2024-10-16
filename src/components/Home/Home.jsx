import React from "react";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import style from './home.module.css'
import BrandIcons from "./BrandIcons/BrandIcons";
import WebTechnology from "./WebTechnology/WebTechnology";

const Home = () => {
  return (
    <>
    <Hero />
    <section className={style.middle}>
      <div className="container">
        <Banner />
        <BrandIcons />
        <WebTechnology />
      </div>
    </section>
    </>
  );
};

export default Home;
