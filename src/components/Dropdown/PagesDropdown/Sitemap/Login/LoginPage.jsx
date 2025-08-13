import React from "react";
import Header from "../../../../Header/Header";
import Navbar from "../../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../../data/navItems";
import Carousel from "../../../../Carousel/Carousel";
import Login from "./Login";
import Footer from "../../../../Footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo="/images/logo.jpg"
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
