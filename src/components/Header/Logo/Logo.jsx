import React from 'react'
import logo from '../../../assets/images/logo.png'
import style from './logo.module.css'

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logo} />
    </div>
  )
}

export default Logo
