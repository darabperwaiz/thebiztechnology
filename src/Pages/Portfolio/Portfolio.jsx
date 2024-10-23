import React from 'react'
import style from './portfolio.module.css'
import Porfolios from "../../Reusable/Porfolios"
import Contact from "../../components/Home/Contact/Contact"
import Ceo from "../../components/Home/CEO/Ceo"

const Portfolio = () => {
  return (
    <>
    <section className={style.portfolio}>
      <div className="container">
      <div className={style.portfolioWrapper}>
          <div className={style.top}>
            <p>Portfolio</p>
            <p>Want to Get in <span>Touch?</span></p>
            <p>thus your brand will transform from bland to <span>buzzworthy.</span> our all ears and mindare here for you.</p>
          </div>
          <Porfolios limit={12} />
      </div>
      </div>
      </section>
      <section>
        <div className="container">
          <Contact />
          <Ceo />
        </div>
      </section>
    </>
  )
}

export default Portfolio