import React from "react";
// import img from '../../../assets/images/vector.svg'
import style from "./banner.module.css";
import TrustedBrands from "../../../Reusable/TrustedBrands";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.left}>
        <p>Experience excellence with our top-notch digital services</p>
      </div>
      <TrustedBrands />
    </div>
  );
};

export default Banner;
