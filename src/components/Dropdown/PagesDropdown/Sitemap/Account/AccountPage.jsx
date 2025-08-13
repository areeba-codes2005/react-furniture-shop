import React from "react";
import Header from "../../../../Header/Header";
import Navbar from "../../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../../data/navItems";
import Carousel from "../../../../Carousel/Carousel";
import Account from "./Account";
import Footer from "../../../../Footer/Footer";

const AccountPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo="/images/logo.jpg"
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
