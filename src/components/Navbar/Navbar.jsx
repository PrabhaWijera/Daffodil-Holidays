// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './navbar.css'

import {IoIosCloseCircle} from "react-icons/io";
import {TbGridDots} from "react-icons/tb";
import {NavLink} from "react-router-dom";
import bg from "../../assets/WhatsApp_Image_2024-08-13_at_14.07.06_0e7351fa_1-removebg-preview.png"
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Itinerary",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },


];


const Navbar = () => {
  const[active, setActive]=useState('navBar')

  const showNav = () =>{
    setActive('navBar activeNavbar')
  }
  const hideNav = () =>{
    setActive('navBar')
  }
  return(
      <section className="navbarSection pb-[5rem]">
        <header className="header flex">
          <div className="logoDiv">
            <a href="/" className="logo flex">
              {/*<MdModeOfTravel className="icon"/><h1>safarnama</h1>*/}
              <img src={bg} alt="" className=""/>
            </a>
          </div>

          <div className={active} >
            <ul className="navLists flex ">
              <li className="navItem">
                <NavLink to='/' className="navLink">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink to='/about' className="navLink">About Us</NavLink>
              </li>
              <li className="navItem">
                <NavLink to='/best-places' className="navLink">Best Places</NavLink>
              </li>
              <li className="navItem">
                <NavLink to='/itinery' className="navLink">Itinerary</NavLink>
              </li>
              <li className="navItem">
                <NavLink to='guide' className="navLink">Travel Guide</NavLink>
              </li>
              <li className="navItem">
                <NavLink to='/contact' className="navLink">Contact</NavLink>
              </li>
              <button
                  className="btn bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                <a href="/booking">Book now!</a>
              </button>
            </ul>

            <div onClick={hideNav} className="closeNavbar">
              <IoIosCloseCircle className="icon"/>
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar icon ">
            <TbGridDots className="icon" />
          </div>

        </header>
      </section>

  );
};

export default Navbar;
