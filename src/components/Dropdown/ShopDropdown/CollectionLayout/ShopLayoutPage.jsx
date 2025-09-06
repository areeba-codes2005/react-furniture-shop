import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import CollectionLayout from "./CollectionLayout";
import Footer from "../../../Footer/Footer";
import logo from "../../../../assets/images/logo.jpg"

const ShopLayoutPage = ({ data, heading }) => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />

      <Carousel />
      <CollectionLayout data={data} heading={heading} />
      <Footer />
    </div>
  );
};

export default ShopLayoutPage;
