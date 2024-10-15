import React from 'react'
import { Link } from "react-router-dom"
import style from "./dropdown.module.css"

const Dropdown = ({submenus, isDropdown, setIsDropdown}) => {
  const onMouseEnter = () => {
    setIsDropdown(true);
   }
   const onMouseLeave = () => {
    setIsDropdown(false);
   }
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${style.dropdown} ${isDropdown ? style.show : ''}`}>
     {submenus.map((submenu, index)=> (
      <Link to={submenu.url} key={index}>{submenu.title}</Link>
     ))}
    </div>
  )
}

export default Dropdown
