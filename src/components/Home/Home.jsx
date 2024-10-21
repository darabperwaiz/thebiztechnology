import React from "react";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import style from "./home.module.css";
import BrandIcons from "./BrandIcons/BrandIcons";
import WebTechnology from "./WebTechnology/WebTechnology";
import Tabview from "./TabView/Tabview";
import OurPortfolio from "./Portfolio/OurPortfolio";
import OurClients from "./OurClients/OurClients";
import About from "./About/About";
import Corevalues from "./CoreValues/Corevalues";
import Banner2 from "./Banner2/Banner2";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";
import Ceo from "./CEO/Ceo";
import Roadmap from "./Roadmap/Roadmap";

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
          <OurPortfolio limit={6} />
          <OurClients />
        </div>
      </section>
      <section>
        <div className="container">
          <About />
        </div>
      </section>
      <section className={style.corevalue}>
        <div className="container">
          <Corevalues />
          <Banner2 />
        </div>
      </section>
      <section className={style.roadmap}>
        <div className="container">
          <Roadmap />
        </div>
      </section>
      <section>
        <div className="container">
            <Testimonial />
            <Contact />
            <Ceo />
        </div>
      </section>
    </>
  );
};

export default Home;
