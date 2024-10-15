import React, { useState } from 'react'
import Dropdown from "./Dropdown/Dropdown"
import { Link } from "react-router-dom"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import style from './navItem.module.css'

const NavItem = ({menus}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const onMouseEnter = () => {
   setIsDropdown(true);
  }
  const onMouseLeave = () => {
   setIsDropdown(false);
  }
  return (
    <>
      {menus.submenu ? (
        <>
        <Link className={style.menuItems} to="#" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{menus.title} {isDropdown? <FaAngleUp /> : <FaAngleDown />}</Link>
        <Dropdown submenus={menus.submenu} isDropdown={isDropdown} setIsDropdown={setIsDropdown}/>
        </>
      ):(
        <Link className={style.menuItems} to={menus.url}>{menus.title}</Link>
      )}
    </>
  )
}

export default NavItem
