import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

//navbar start
const Navbar = () => {

  const navigate = useNavigate();
  const { isSignedIn, userId } = useAuth();

  console.log("isSignedIn:", isSignedIn);
  console.log("userId:", userId);

  const [sticky, setStickey] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setStickey(true) : setStickey(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        {/* Add an ID to each component and paste that unique ID here in target */}
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        {isSignedIn && userId === 'user_2hDpsa04NmsUdqC86ukoY9y5FZy' && (
          <li>
            <NavLink
              to="#"
              onClick={handleClick}>
            </NavLink>
          </li>
        )}
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="a"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
