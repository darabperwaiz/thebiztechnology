import React from 'react'
import SmallCard from "../../../Reusable/SmallCard"
import style from './corevalues.module.css'

const Corevalues = () => {
  return (
    <div className={style.coreValues}>
      <div className={style.top}>
        <p className={style.title}>Our <span>Core</span> Values</p>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
        <SmallCard title={"Innovation"} des={"We are committed to staying at the forefront of technological advancements and providing innovative solutions that drive business growth"} icon="tips_and_updates_black_24dp 1.svg"/>
        <SmallCard title={"Excellence"} des={"We strive for excellence in everything we do, delivering high-quality services and exceeding client expectations."} icon="stars_black_24dp 1.svg"/>
        <SmallCard title={"Collaboration"} des={"We believe in the power of collaboration and teamwork, working closely with our clients to achieve shared goals and objectives."} icon="handshake_black_24dp 1.svg"/>
        </div>
        <div className={style.right}>
        <SmallCard title={"Integrity"} des={"We conduct our business with honesty, transparency, and integrity, building trust and credibility with our clients."} icon="verified_user_black_24dp 1.svg"/>
        <SmallCard title={"Project Timeline"} des={"We understand the value of time and money for a  business growth , So , we complete the projects within given time frame."} icon="timeline_black_24dp 1.svg"/>
        <SmallCard title={"Customer Focus"} des={"We are dedicated to understanding and meeting the unique needs of each client, providing personalized service and support."} icon="center_focus_strong_black_24dp 1.svg"/>
        </div>
      </div>
    </div>
  )
}

export default Corevalues
