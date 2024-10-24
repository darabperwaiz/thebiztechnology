import React from 'react'
import style from './trustedBrand.module.css'
import GreenStar from "../assets/images/GreenStar.svg";
import WhiteStar from "../assets/images/WhiteStar.svg";
import google from '../assets/images/google.svg'
import yellowStar from '../assets/images/yellostar.svg'
import halfYellow from '../assets/images/halfYellow.svg'

const TrustedBrands = () => {
  return (
    <div className={style.right}>
        <div className={style.trustpilot}>
          <div className={style.trustpilotHead}>
            <img src={GreenStar} alt="green star" />
            <p>Trustpilot</p>
          </div>
          <div className={style.greenStar}>
            <div className={style.starRating}>
              <img src={WhiteStar} alt="white star" />
            </div>
            <div className={style.starRating}>
              <img src={WhiteStar} alt="white star" />
            </div>
            <div className={style.starRating}>
              <img src={WhiteStar} alt="white star" />
            </div>
            <div className={style.starRating}>
              <img src={WhiteStar} alt="white star" />
            </div>
            <div className={style.Halfstar}>
              <img src={WhiteStar} alt="white star" />
            </div>
          </div>
          <div className={style.rating}>
            <p>Rated 4.5/5.0</p>
          </div>
        </div>
        <div className={style.google}>
          <div className={style.gLeft}>
            <img src={google} alt="google" />
            <div className={style.YStar}>
              <img src={yellowStar} alt="yellow star" />
              <img src={yellowStar} alt="yellow star" />
              <img src={yellowStar} alt="yellow star" />
              <img src={yellowStar} alt="yellow star" />
              <img src={halfYellow} alt="half star" />
            </div>
          </div>
          <div className={style.gRight}>
            <p>Google</p>
            <p>average rating</p>
            <p>4.7</p>
          </div>
        </div>
        <div className={style.clutch}>
          <img src={require(`../assets/images/clutch.png`)} alt="" />
        </div>
      </div>
  )
}

export default TrustedBrands
