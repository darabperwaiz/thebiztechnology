import React from 'react'
import style from './roadmap.module.css'

const Roadmap = () => {
  return (
    <div className={style.roadmap}>
      <div className={style.title}>
        <p>Development</p>
        <p>Roadmap</p>
      </div>
      <div className={style.bottom}>
            <img src={require(`../../../assets/images/brandIcons/curve_rainbow.png`)} alt="" />
      </div>
    </div>
  )
}

export default Roadmap
