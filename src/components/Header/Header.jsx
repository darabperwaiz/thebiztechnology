import React, { useEffect, useState } from 'react'
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import style from './header.module.css'
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"


const Header = () => {
  const [show, setShow] = useState(true)
  const [activeClass, setActiveClass] = useState(style.active)
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
   
    if(width<= 768) {
      setActiveClass(style.top)
    } else {
      setActiveClass(style.active)
    }

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {

      // Get the new Value
      currentScrollPosition = window.scrollY;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <header className={show ? `${activeClass}` : null}>
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
