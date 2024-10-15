import React from 'react'
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import style from './header.module.css'
import { Outlet } from "react-router-dom"
// import { Wrapper } from "../../Reusable/Wrapper"

const Header = () => {
  return (
    <>
    <header>
      <Logo />
      <Navbar />
    </header>
    <Outlet />
    </>
  )
}

export default Header
