import React from 'react'
import style from './ourportfolio.module.css'
import PrimaryButton from "../../../Reusable/PrimaryButton"

const OurPortfolio = () => {
  return (
    <div className={style.OurPortfolio}>
      <div className={style.top}>
        <div>
            <p className={style.head}>Our <span>Portfolio</span></p>
        </div>
        <div className={style.nav}>
            <p>All</p>
            <p>Website Design</p>
            <p>Mobile App</p>
            <p>SEO</p>
            <p>UI/UX</p>
        </div>
      </div>
      <div className={style.mid}>
        Projects
      </div>
      <div className={style.bottom}>
        <PrimaryButton text={"View our all projects"}/>
      </div>
    </div>
  )
}

export default OurPortfolio

