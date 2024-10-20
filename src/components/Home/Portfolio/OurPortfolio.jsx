import React from 'react'
import style from './ourportfolio.module.css'
import PrimaryButton from "../../../Reusable/PrimaryButton"
import { portfolioData } from "./PortfolioData"

const OurPortfolio = ({limit=6}) => {
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
        {portfolioData.map((t, i)=> i < 6 && (

          <div className={`${style.gridItem} item${i}`} key={i}>
            <img src={require(`../../../assets/images/porfolioimg/${t.img}`)} alt="" />
          </div>
        ))}
        
        {/* <div className={`${style.gridItem} item${'1'}`}>2</div>
        <div className={`${style.gridItem} item${'2'}`}>3</div>
        <div className={`${style.gridItem} item${'3'}`}>4</div>
        <div className={`${style.gridItem} item${'4'}`}>5</div>
        <div className={`${style.gridItem} item${'5'}`}>6</div> */}
      </div>
      <div className={style.bottom}>
        <PrimaryButton text={"View our all projects"}/>
      </div>
    </div>
  )
}

export default OurPortfolio

