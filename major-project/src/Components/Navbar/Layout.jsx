// src/components/Navigation/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SignButton from './SignButton';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Title from '../Title/Title';
import Contact from '../Contact/Contact';
import Dashboard from '../../pages/Dashboard';

const Layout = () => {
  return (
    <div className="layout">
      <div className="main-content">
        <Navbar />
        <Hero />
        <SignButton />
        <Outlet />
        <Title subTitle="Get in touch" title="Contact Us" bgColor="#FFFFFF" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
