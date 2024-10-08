import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { isSignedIn, userId } = useAuth();
  const authorizedUsers = ['user_2lFhgi7miSF7UcKSC2Bg58GYdFX','user_2ltZxneRZDELjYnRIUMsWvFo5xg'];

  console.log("isSignedIn:", isSignedIn);
  console.log("userId:", userId);

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  const handleSmoothScroll = (event, target, offset = 0) => {
    event.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const targetOffset = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <a href="#" onClick={(e) => handleSmoothScroll(e, 'hero', 0)}>Home</a>
        </li>
        {isSignedIn && authorizedUsers.includes(userId) && (
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          )}
        <li>
          <a href="#" onClick={(e) => handleSmoothScroll(e, 'contact', 230)}>Contact</a>
        </li>
      </ul>
      <img src={menu_icon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
