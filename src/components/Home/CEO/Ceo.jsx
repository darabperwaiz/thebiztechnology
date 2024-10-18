import React from 'react'
import style from './ceo.module.css'
import { LearnMoreBtn } from "../../../Reusable/LearnMoreBtn"

const Ceo = () => {
  return (
    <div className={style.ceo}>
      <div className={style.left}>
        <div className={style.curve}></div>
        <div className={style.ceoImage}>
            <img src={require(`../../../assets/images/ceo_image.jpeg`)} alt="" />
        </div>
        <div className={style.leftLeft}>
            <div className={style.title}>
                <p>KAMRAN</p>
                <p>ASHRAF</p>
            </div>
            <p className={style.tag}>Founder and CEO</p>
        </div>
      </div>
      <div className={style.right}>
        <p>A Message From CEO</p>
        <div className={style.mid}>
            <img className={style.quote} src={require(`../../../assets/images/quoteLeft.svg`).default} alt="" />
            <p>The Biz Technology, our mission is clear  to provide you with cutting-edge insights, trends, and innovations in the dynamicrealm of business.</p>
        </div>
        <img className={style.quote} src={require(`../../../assets/images/quoteRight.svg`).default} alt="" />
        <LearnMoreBtn text={"learn more"} url={'#'} color={'blue'} />
      </div>
    </div>
  )
}

export default Ceo
