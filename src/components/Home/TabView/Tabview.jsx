import React, { useState } from 'react'
import style from './tabview.module.css'
import { data } from "./servicesData"
import { Card } from "../../../Reusable/Card"

const tabs = ["Services Offered", "Digital / Internet Marketing"]

const Tabview = () => {
    const [toggleState, setToggleState] = useState(1)

    const handleTab = (e, index) => {
        setToggleState(index)
        console.log(index, e)


    }
  return (
    <div className={style.tabsWrapper}>
    <div className={style.tabs}>
      <div onClick={(e)=> handleTab(e, 1)} className={toggleState === 1 ? `${style.tab} ${style.active}`: `${style.tab}`}>Services Offered</div>
      <div onClick={(e)=> handleTab(e, 2)} className={toggleState === 2 ? `${style.tab} ${style.active}`: `${style.tab}`}>Digital / Internet Marketing</div>
    </div>
    <div className={toggleState===1 ? `${style.content} ${style.contentVisible}` : `${style.content}`}>
        {data.map((item, index)=> (
            <Card data={item} index={index} key={index}/>
        ))}
    </div>
    <div className={toggleState===2 ? `${style.content} ${style.contentVisible}` : `${style.content}`}>
    {data.map((item, index)=> (
            <Card data={item} index={index} key={index}/>
        ))}
    </div>
    </div>
  )
}

export default Tabview
