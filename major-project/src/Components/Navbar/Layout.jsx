// src/components/Navigation/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SignButton from './SignButton';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Title from '../Title/Title';
import Contact from '../Contact/Contact';

const Layout = () => {
  return (
    <div className="layout">
      <div className="main-content">
        <Navbar />
        <Hero />
        <SignButton />
        <Outlet />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
