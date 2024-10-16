import style from "./card.module.css";
import { LearnMoreBtn } from "./LearnMoreBtn";
import { HiOutlinePlus } from "react-icons/hi2";
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { useEffect, useState } from "react";

export const Card = ({data, index}) => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive((prev)=> !prev)
    }

    useEffect(() => {
        if(index===2) {
            setIsActive(true)
        }
        // return () => {
            
        // };
    }, []);
  return (
    <div className={style.card}>
      <div className={style.cardLeft}>
        <img className={style.icons} src={require(`../assets/images/serviceIcons/${data.src}`)} alt="" />
        <p>{data.title}</p>
      </div>
      <div className={style.cardRight}>
        <div className={isActive ? `${style.cardRightLeft}` : `${style.hide}`}>
          <p>
            {data.description}
          </p>
          <LearnMoreBtn text={"learn more"} url={"#"} color={"blue"} />
        </div>
        <div className={style.cardToggleBtn} onClick={handleClick}>
        {/*  */}
        {isActive ? <BsDashLg style={{color: "#707070"}}/> : <BsPlusLg style={{color: "#4285F4"}}/>}
          
        </div>
      </div>
    </div>
  );
};
