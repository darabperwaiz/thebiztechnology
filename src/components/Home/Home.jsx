import React from "react";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import style from './home.module.css'

const Home = () => {
  return (
    <>
    <Hero />
    <section className={style.middle}>
      <div className="container">
        <Banner />
      </div>
    </section>
    </>
  );
};

export default Home;
