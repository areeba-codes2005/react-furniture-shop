import React from "react";
import Header from "../../../../Header/Header";
import Navbar from "../../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../../data/navItems";
import Carousel from "../../../../Carousel/Carousel";
import Account from "./Account";
import Footer from "../../../../Footer/Footer";
import logo from "../../../../../assets/images/logo.jpg";

const AccountPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />
      <Carousel />
      <Account />
      <Footer />
    </div>
  );
};

export default AccountPage;
