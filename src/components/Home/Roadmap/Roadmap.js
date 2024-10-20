import React from 'react'
import style from './roadmap.module.css'
import HoverIcon from "../../../Reusable/HoverIcon/HoverIcon"
import foucs from '../../../assets/images/roadmapIcons/focus.svg'

const Roadmap = () => {
  return (
    <div className={style.roadmap}>
      <div className={style.title}>
        <p>Development</p>
        <p>Roadmap</p>
      </div>
      <div className={style.bottom}>
            <img src={require(`../../../assets/images/brandIcons/curve_rainbow.png`)} alt="" />
            <div className={style.icon1}>
            <HoverIcon p1="Consulation & Assistment" p2="our platform is meticulously crafted to equip you with indispensable knowledge." icon="focus.svg" bgColor="#FFE3E1"/>
            </div>
            <div className={style.icon2}>
            <HoverIcon p1="Analysis & Planning" p2="our platform is meticulously crafted to equip you with indispensable knowledge." icon="YelloLine.svg" bgColor="#FFEFD3"/>
            </div>
            <div className={style.icon3}>
            <HoverIcon p1="Implementation" p2="We begin by understanding your organization's digitally needs, challenges, and goals through an initial consultation. This helps us tailor our services to your specific requirements." icon="handshake.svg" bgColor="#FFF5D8"/>
            </div>
            <div className={style.icon4}>
            <HoverIcon p1="Quality Testing" p2="our platform is meticulously crafted to equip you with indispensable knowledge." icon="verified.svg" bgColor="#EDFFD8"/>
            </div>
            <div className={style.icon5}>
            <HoverIcon p1="CMS Training" p2="our platform is meticulously crafted to equip you with indispensable knowledge." icon="tips.svg" bgColor="#DEECFF"/>
            </div>
            <div className={style.icon6}>
            <HoverIcon p1="Support & Maintenance" p2="our platform is meticulously crafted to equip you with indispensable knowledge." icon="purple.svg" bgColor="#FAE7FF"/>
            </div>
      </div>
    </div>
  )
}

export default Roadmap
