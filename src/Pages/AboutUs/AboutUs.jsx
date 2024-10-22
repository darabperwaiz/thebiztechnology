import React from "react";
import style from "./aboutus.module.css";
import TrustedBrands from "../../Reusable/TrustedBrands";
import PrimaryButton from "../../Reusable/PrimaryButton";
import Contact from "../../components/Home/Contact/Contact";
import Ceo from "../../components/Home/CEO/Ceo";

const AboutUs = () => {
  return (
    <>
      <div className={style.aboutHero}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.head}>
              <p className={style.title}>
                welcome to <span>the biz technology company</span>
              </p>
              <p className={style.des}>
                your trusted partner for internet marketing and website
                services. Specializing in delivering tailored solutions, we
                empower businesses to enhance their online presence and drive
                growth
              </p>
            </div>
            <TrustedBrands />
            <PrimaryButton text={"Let's talk with me"} />
          </div>
        </div>
      </div>
      <section>
        <div className="container">
            Section....... Coming Soon!
        </div>
      </section>
      
      <div className="container">
        <Contact />
        <Ceo />
      </div>
    </>
  );
};

export default AboutUs;
