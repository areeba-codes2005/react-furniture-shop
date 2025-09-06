import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import TermsAndCon from "./TermsAndCon";
import Footer from "../../../Footer/Footer";

const TermsAndConPage = ({ data }) => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={`${process.env.PUBLIC_URL}/images/logo.jpg`}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />

      <Carousel />
      <TermsAndCon data={data} />
      <Footer />
    </div>
  );
};

export default TermsAndConPage;
