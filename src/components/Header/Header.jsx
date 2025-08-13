import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container-fluid head" id="home">
        <header className="container-fluid">
          <div className="row pt-3">
            <div className="col-lg-4 d-none d-lg-block d-flex me-auto header-col-1">
              <a href="#">
                <FiPhoneCall />
              </a>
              <span>+391 (0)35 2568 4593</span>
              <span className="mx-3">|</span>
              <a href="#">
                <CgMail />
              </a>
              <span>demo@demo.com</span>
            </div>
            <div className="col-12 col-md-12 col-lg-5 d-flex justify-content-center align-items-center header-col-2">
              <p>
                Free shipping on all orders over <u>$79</u>
              </p>
              <button className="ms-2 mb-3">Shop Now!</button>
            </div>
            <div className="col-lg-3 d-none d-lg-block text-end header-col-3">
              <a href="#" className="px-2">
                <FaFacebook />
              </a>
              <a href="#" className="px-2">
                <FaInstagram />
              </a>
              <a href="#" className="px-2">
                <FaYoutube />
              </a>
              <a href="#" className="px-2">
                <TbWorld />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
