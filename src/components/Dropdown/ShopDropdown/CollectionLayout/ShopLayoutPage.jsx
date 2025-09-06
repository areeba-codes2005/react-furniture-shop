import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import CollectionLayout from "./CollectionLayout";
import Footer from "../../../Footer/Footer";

const ShopLayoutPage = ({ data, heading }) => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={`${process.env.PUBLIC_URL}/images/logo.jpg`}
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
