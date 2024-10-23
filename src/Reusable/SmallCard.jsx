import React from 'react'
import style from './smallCard.module.css'

const SmallCard = ({title, des, icon}) => {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <img src={require(`../assets/images/corevalue/${icon}`)} alt="" />
      </div>
      <div className={style.bottom}>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{des}</p>
      </div>
    </div>
  )
}

export default SmallCard
