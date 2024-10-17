import React from 'react'
import style from './about.module.css'
import { Button } from "../../../Reusable/Button"

const About = () => {
  return (
    <div className={style.about}>
      <p className={style.title}>About <span>Us</span></p>
      <div className={style.bottom}>
        <div className={style.left}>
            <img src={require(`../../../assets/images/about-section.jpg`)} alt="" />
            <div className={style.hoverImg}>
                <img src={require(`../../../assets/images/logo.png`)} alt="" />
            </div>
        </div>
        <div className={style.right}>
            <img src={require(`../../../assets/images/quoteLeft.svg`).default} alt="" />
            <p className={style.description}>The Biz Technology, our mission is clear: to provide you with cutting-edge insights, trends, and innovations in the dynamicrealm of business and technology. Whether you're an experienced entrepreneur, aburgeoning start-up, or simply passionate about tech, innovations in the dynamicrealm of business and technology. our platform is meticulously crafted to equip you with indispensable knowledge.our platform is meticulously crafted to equip you with indispensable knowledge.</p>
            <div className={style.rightBottom}>
                <Button text={"Know More"} />
                <img src={require(`../../../assets/images/quoteRight.svg`).default} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
