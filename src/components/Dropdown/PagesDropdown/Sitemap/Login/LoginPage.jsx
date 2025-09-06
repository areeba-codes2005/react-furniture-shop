import React from "react";
import Header from "../../../../Header/Header";
import Navbar from "../../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../../data/navItems";
import Carousel from "../../../../Carousel/Carousel";
import Login from "./Login";
import Footer from "../../../../Footer/Footer";
import logo from "../../../../../assets/images/logo.jpg";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />
      <Carousel />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
