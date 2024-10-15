import { FaArrowRightLong } from "react-icons/fa6";
import style from "./Button.module.css"


export const Button = ({text}) => {
    return (
        <button className={style.button}>
        <span>{text}</span>
        <span><FaArrowRightLong /></span>
      </button>
    )
}