import React, { useState } from 'react'
import NavItem from "./NavItem/NavItem"
import { menuItemsData } from "./NavbarData"
import { Link } from "react-router-dom"
import { LuMail } from "react-icons/lu";
import style from './Navbar.module.css'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Button } from "../../../Reusable/Button";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const handlHamburger = () => {
    setIsActive(true)
  }
  const handlClose = () => {
    setIsActive(false)
  }
  return (
    <>
    <nav>
    <div className={style.topContact}>
            <Link className={style.email} to="mailto:info@thebiztechnology.com"><LuMail style={{color: "orange"}}/> <span>info@thebiztechnology.com</span></Link>
            <Link className={style.phone} to="tel:+12340499999">+1 (234)-049-9999</Link>
    </div>
    <ul className={`${style.navItems} ${isActive ? `${style.active}` : ''}`}>
      <div className={style.closeIcon} onClick={handlClose}><IoClose /></div>
      {menuItemsData.map((menus, index)=> (
        <li><NavItem menus={menus} key={index}/></li>
      ))}
      <li className={style.lang}>
        <span>EN</span>
        <span>SP</span>
      </li>
      <Button text={"Get A Quote"} />
    </ul>
    </nav>
    <div onClick={handlHamburger} className={style.mobileMenuIcon}>
    <HiOutlineMenuAlt3 />
    </div>
    </>
  )
}

export default Navbar
