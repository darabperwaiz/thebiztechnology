import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import style from './PrimaryButton.module.css'

const PrimaryButton = ({text}) => {
  return (
    <button className={style.button}>
      <span>{text}</span>
      <span><FaArrowRightLong /></span>
    </button>
  )
}

export default PrimaryButton
