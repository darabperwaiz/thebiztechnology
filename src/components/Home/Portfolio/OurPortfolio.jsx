import React, { useMemo, useState } from 'react'
import style from './ourportfolio.module.css'
import PrimaryButton from "../../../Reusable/PrimaryButton"
import { portfolioData } from "./PortfolioData"

const OurPortfolio = ({limit=6}) => {
  const [category, setCategory] = useState('')
  const [idx, setIdx] = useState(1)
  const projects = useMemo(()=> {
    return portfolioData.filter((data)=> {
      if(category === '') {
        return portfolioData
      }

      const proCategory = data.category.toLowerCase()
      return proCategory.includes(category)
    })
  }, [category])
  return (
    <div className={style.OurPortfolio}>
      <div className={style.top}>
        <div>
            <p className={style.head}>Our <span>Portfolio</span></p>
        </div>
        <div className={style.nav}>
            <p onClick={()=> {setCategory(''); setIdx(1) }} className={idx === 1 ? `${style.active}`: null}>All</p>
            <p onClick={()=> {setCategory('website design'); setIdx(2)}} className={idx === 2 ? `${style.active}`: null}>Website Design</p>
            <p onClick={()=> {setCategory('mobile app'); setIdx(3)}} className={idx === 3 ? `${style.active}`: null}>Mobile App</p>
            <p onClick={()=> {setCategory('seo'); setIdx(4)}} className={idx === 4 ? `${style.active}`: null}>SEO</p>
            <p onClick={()=> {setCategory('ui/ux'); setIdx(5)}} className={idx === 5 ? `${style.active}`: null}>UI/UX</p>
        </div>
      </div>
      <div className={style.mid}>
        {projects.map((t, i)=> i < 6 && (

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

