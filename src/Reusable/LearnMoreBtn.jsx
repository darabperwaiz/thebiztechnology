import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import style from './learnmoreBTN.module.css'


export const LearnMoreBtn = ({text, url, color}) => {
    return (
        <>
        <Link className={style.link} style={{color: `${color}`, textDecoration: "none"}} to={url}>{text} <FaArrowRightLong /> </Link>
        </>
    )
}