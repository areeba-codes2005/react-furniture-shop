import React from "react";
import "./Sitemap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sitemap = () => {
  const navigate = useNavigate();

  const handleLinkClick = (pagesName) => {
    switch (pagesName) {
      case "New products":
        navigate("/new-products");
        break;
      case "Best sellers":
        navigate("/best-sellers");
        break;
      case "Price drop":
        navigate("/price-drop");
        break;
      case "Graphic Corner":
        navigate("/graphic-corner");
        break;
      case "Studio Design":
        navigate("/studio-design");
        break;
      case "Home":
        navigate("/home");
        break;
      case "Furniture":
        navigate("/furniture");
        break;
      case "Lighting Lamp":
        navigate("/lighting-lamp");
        break;
      case "Decor Art":
        navigate("/decor-art");
        break;
      case "Chairs":
        navigate("/chairs");
        break;
      case "Artisan Appeal":
        navigate("/artisan-appeal");
        break;
      case "Boho Bliss":
        navigate("/boho-blissl");
        break;
      case "Sofas":
        navigate("/sofas");
        break;
      case "Construction":
        navigate("/construction");
        break;
      case "Log in":
        navigate("/log-in");
        break;
      case "Create new account":
        navigate("/create-new-account");
        break;
      case "Delivery":
        navigate("/delivery");
        break;
      case "Legal Notice":
        navigate("/legal-notice");
        break;
      case "Terms and conditions of use":
        navigate("/terms-and-conditions-of-use");
        break;
      case "About us":
        navigate("/about-us");
        break;
      case "Secure payment":
        navigate("/secure-payment");
        break;
      case "FAQs":
        navigate("/faqs");
        break;
      case "Our stores":
        navigate("/our-stores");
        break;
      case "Contact us":
        navigate("/contact-us");
        break;
      case "Sitemap":
        navigate("/sitemap");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row mb-5">
          <h4 className="sitemap-heading">SITEMAP</h4>
          <div className="col-12 col-md-3">
            <h5 className="links-title">OUR OFFERS</h5>
            <hr className="smp-custom-hr" />
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/new-products"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("New products");
                  }}
                  className="sitemap-link"
                >
                  New products
                </Link>
              </li>
              <li>
                <Link
                  to="/best-sellers"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Best sellers");
                  }}
                  className="sitemap-link"
                >
                  Best sellers
                </Link>
              </li>
              <li>
                <Link
                  to="/price-drop"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Price drop");
                  }}
                  className="sitemap-link"
                >
                  Price drop
                </Link>
              </li>
              <li>
                <Link
                  to="/graphic-corner"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Graphic Corner");
                  }}
                  className="sitemap-link"
                >
                  Graphic Corner
                </Link>
              </li>
              <li>
                <Link
                  to="/studio-design"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Studio Design");
                  }}
                  className="sitemap-link"
                >
                  Studio Design
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="links-title">CATEGORIES</h5>
            <hr className="smp-custom-hr" />
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Home");
                  }}
                  className="sitemap-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/furniture"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Furniture");
                  }}
                  className="sitemap-link"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  to="/lighting-lamp"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Lighting Lamp");
                  }}
                  className="sitemap-link"
                >
                  Lighting Lamp
                </Link>
              </li>
              <li>
                <Link
                  to="/decor-art"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Decor Art");
                  }}
                  className="sitemap-link"
                >
                  Decor Art
                </Link>
              </li>
              <li>
                <Link
                  to="/chairs"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Chairs");
                  }}
                  className="sitemap-link"
                >
                  Chairs
                </Link>
              </li>
              <li>
                <Link
                  to="/artisan-appeal"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Artisan Appeal");
                  }}
                  className="sitemap-link"
                >
                  Artisan Appeal
                </Link>
              </li>
              <li>
                <Link
                  to="/boho-bliss"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Boho Bliss");
                  }}
                  className="sitemap-link"
                >
                  Boho Bliss
                </Link>
              </li>
              <li>
                <Link
                  to="/sofas"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Sofas");
                  }}
                  className="sitemap-link"
                >
                  Sofas
                </Link>
              </li>
              <li>
                <Link
                  to="/construction"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Construction");
                  }}
                  className="sitemap-link"
                >
                  Construction
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="links-title">YOUR ACCOUNT</h5>
            <hr className="smp-custom-hr" />
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/log-in"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Log in");
                  }}
                  className="sitemap-link"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/create-new-account"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Create new account");
                  }}
                  className="sitemap-link"
                >
                  Create new account
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="links-title">PAGES</h5>
            <hr className="smp-custom-hr" />
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/delivery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Delivery");
                  }}
                  className="sitemap-link"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-notice"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Legal Notice");
                  }}
                  className="sitemap-link"
                >
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions-of-use"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Terms and conditions of use");
                  }}
                  className="sitemap-link"
                >
                  Terms and conditions of use
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("About us");
                  }}
                  className="sitemap-link"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/secure-payment"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Secure payment");
                  }}
                  className="sitemap-link"
                >
                  Secure payment
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("FAQs");
                  }}
                  className="sitemap-link"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/our-stores"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Our stores");
                  }}
                  className="sitemap-link"
                >
                  Our stores
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Contact us");
                  }}
                  className="sitemap-link"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Sitemap");
                  }}
                  className="sitemap-link"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
