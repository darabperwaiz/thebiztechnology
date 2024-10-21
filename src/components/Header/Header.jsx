import React from 'react'
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import style from './header.module.css'
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
// import { Wrapper } from "../../Reusable/Wrapper"

const Header = () => {
  return (
    <>
    <header>
      <div className={style.nav}>
      <Logo />
      <Navbar />
      </div>
    </header>
    <Outlet />
    <Footer />
    </>
  )
}

export default Header
