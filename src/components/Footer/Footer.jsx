import "./Footer.css";
import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  useEffect(() => {
    const toggleBottomVisibility = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setIsBottomVisible(scrollPosition < pageHeight - 100);
    };

    window.addEventListener("scroll", toggleBottomVisibility);

    return () => {
      window.removeEventListener("scroll", toggleBottomVisibility);
    };
  }, []);
  const scrollToTop = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBottom = () => {
    const footer = document.getElementById("ftr");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <footer id="ftr">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12 col-md-12 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-md-center align-items-lg-start ms-3">
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
                  className="img-fluid footer-logo"
                  alt="brand-logo"
                />
                <div>
                  <a href="#" className="px-2 footer-smedia-icon">
                    <FaFacebook />
                  </a>
                  <a href="#" className="px-2 footer-smedia-icon">
                    <FaInstagram />
                  </a>
                  <a href="#" className="px-2 footer-smedia-icon">
                    <FaYoutube />
                  </a>
                  <a href="#" className="px-2 footer-smedia-icon">
                    <TbWorld />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="d-flex flex-column footer-col2">
                <h6>Customer Services</h6>
                <a href="#">My Account</a>
                <a href="#">Track Your Order</a>
                <a href="#">FAQs</a>
                <a href="#">Payment Methods</a>
                <a href="#">Shipping Guide</a>
                <a href="#">Products Support</a>
                <a href="#">Gift Card Balance</a>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="d-flex flex-column footer-col3">
                <h6>More From Rubix</h6>
                <a href="#">About Rubix</a>
                <a href="#">Our Guarantees</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Return Plicy</a>
                <a href="#">Delivery & Return</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="d-flex flex-column footer-col4">
                <h6>Let's Talk</h6>
                <span>
                  <span className="no-icon pe-3">
                    <FaHeadphonesAlt />
                  </span>
                  <a href="#" className="number text-decoration-none">
                    +000 (0)12 3456 7899
                  </a>
                </span>
                <a href="#" className="email-link text-decoration-none">
                  demo@demo.com
                </a>
                <h6 className="pt-4">Find Us</h6>
                <span className="address">
                  <span className="location-icon pe-3">
                    <LiaLocationArrowSolid />
                  </span>
                  502 New Design Str,
                </span>
                <span className="location">Melbourne,Australia</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-between pb-3">
            <hr className="custom-hr" />
            <div className="col-12 col-md-4 col-lg-4">
              <p className="copyright-text">
                <span>© 2024 Rubix.</span>All Rights Reserved
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/footer-brandlogo.png`}
                className="img-fluid"
                alt="Brand Logo"
              />
            </div>
          </div>
        </div>
      </footer>
      <div id="back-top" className={isVisible ? "show" : "hide"}>
        <button onClick={scrollToTop} className="back-top-btn">
          <FaAngleDoubleUp />
        </button>
      </div>
      <div id="back-bottom" className={isBottomVisible ? "show" : "hide"}>
        <button onClick={scrollToBottom} className="back-bottom-btn">
          <FaAngleDoubleDown />
        </button>
      </div>
    </div>
  );
};

export default Footer;
