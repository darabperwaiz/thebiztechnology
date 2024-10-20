import React from "react";
import style from "./hoverIcon.module.css";

const HoverIcon = ({p1, p2, icon, bgColor}) => {
    console.log(icon)
  return (
    <div className={style.hoverIcon}>
      <p>{p1}</p>
      <div className={style.verticleLine}></div>
      <div className={style.circle}>
        <div className={style.innerCircle} style={{backgroundColor: `${bgColor}`}}>
          <img
            className={style.icon}
            src={require(`../../assets/images/roadmapIcons/${icon}`)}
            alt=""
          />
        </div>
      </div>
      <p>{p2}</p>
    </div>
  );
};

export default HoverIcon;
