import React, { useState } from 'react'
import style from './webtechnology.module.css'
import { webTechData } from "./webTechData"
import { LearnMoreBtn } from "../../../Reusable/LearnMoreBtn"

const WebTechnology = () => {
    const [singleData, setSingleData] = useState(webTechData[1])
    const [isActive, setIsActive] = useState(false)

    const handleClick = (item, index) => {
        setSingleData(item)
    }

  return (
    <div className={style.technology}>
      <div className={style.top}>
        <p><b>Web</b> Technology</p>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
            <ul className={style.items}>
                {webTechData.map((item, index)=> (
                    <li className={item.id === singleData.id ? `${style.item} ${style.active}` : style.item} key={index} onClick={()=> handleClick(item, index)} >{item.tag}</li>
                ))}
            </ul>
        </div>
        <div className={style.right}>
             <img src={require(`../../../assets/images/brandIcons/${singleData.src}`)} alt="new" />
             <div>
             <p>{singleData.description}</p>   
            <LearnMoreBtn text={"learn more"} url={"#"} color={"orange"}/>
             </div>
        </div>
      </div>
    </div>
  )
}

export default WebTechnology
