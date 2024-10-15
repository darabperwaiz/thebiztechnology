import React from 'react'
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import style from './header.module.css'
// import { Wrapper } from "../../Reusable/Wrapper"

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header
