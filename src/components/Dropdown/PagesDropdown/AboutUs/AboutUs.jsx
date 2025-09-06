import React from "react";
import "./AboutUs.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import pageaboutimg1 from "../../../../assets/images/page_about-img1.png";
import pageaboutimg2 from "../../../../assets/images/page_about-img2.webp";
import blogimg1 from "../../../../assets/images/blogimg1.jpg";
import blogimg2 from "../../../../assets/images/blogimg2.jpg";
import blogimg3 from "../../../../assets/images/blogimg3.jpg";
import lexstobiefurniture from "../../../../assets/video/lex-stobie-furniture.mp4";
import aboutteamimg1 from "../../../../assets/images/about-teamimg1.avif";
import aboutteamimg2 from "../../../../assets/images/about-teamimg2.avif";
import aboutteamimg3 from "../../../../assets/images/about-teamimg3.avif";
import aboutteamimg4 from "../../../../assets/images/about-teamimg4.avif";

const AboutUs = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <h6 className="about-heading">Welcome to Rubix Store</h6>
            <h2 className="about-sub-heading">
              Our Success <br /> And Company History.
            </h2>
            <p className="about-para">
              Ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum
              ac, sollicitudin quam quisque, at interdum dignissim, fringilla
              elit risus lorem eu condimentum eros mollis.
            </p>
            <div className="about-italic-para">
              <em>
                Donec vehicula cursus vestibulum lectus, sit eros integer varius
                cum turpis et quam congue nisl accumsan.
              </em>
            </div>
            <p className="about-para mb-5">
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              doming id quod mazim placerat facer possim assum typi non habent
              claritatem insitam…
            </p>
            <div>
              <img src={pageaboutimg1} alt="signature" />
              <p className="mt-3">
                <strong>John doe–</strong> Founder or Rubix Store
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 about-chair-img-column">
            <img src={pageaboutimg2} alt="chair-img" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-3 mb-5">
          <div className="col-12 col-md-4 col-lg-4">
            <img src={blogimg1} alt="Room" className="blog-cardimg img-fluid" />
            <h5 className="blog-card-post-title">OUR VISION</h5>
            <p className="blog-card-post-para">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <img
              src={blogimg2}
              alt="Kitchen"
              className="blog-cardimg img-fluid"
            />
            <h5 className="blog-card-post-title">WHAT WE REALLY DO?</h5>
            <p className="blog-card-post-para">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit.
            </p>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <img
              src={blogimg3}
              alt="Living Room"
              className="blog-cardimg img-fluid"
            />
            <h5 className="blog-card-post-title">HISTORY OF BEGINNING</h5>
            <p className="blog-card-post-para">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <video className="w-100" controls autoPlay muted loop>
          <source src={lexstobiefurniture} type="video/mp4" />
        </video>
      </div>
      <div className="container-fluid">
        <div className="row mb-5">
          <h3 className="about-meet-team-heading text-center">Meet our team</h3>
          <p className="text-center about-team-title">
            At vero eos et accusamus et iusto odio dignissimos ducimus.
          </p>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-team-info-box">
              <img src={aboutteamimg1} alt="CEO & Foundere image" />
              <h5 className="text-center">ANGELA JOLIE</h5>
              <p className="text-center">CEO & Founder</p>
              <div className="d-flex justify-content-center">
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
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-team-info-box">
              <img src={aboutteamimg2} alt="CEO & Foundere image" />

              <h5 className="text-center">HANNAH GIBSON</h5>
              <p className="text-center">CEO & Founder</p>
              <div className="d-flex justify-content-center">
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
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-team-info-box">
              <img src={aboutteamimg3} alt="CEO & Foundere image" />

              <h5 className="text-center">LIL WAYNE</h5>
              <p className="text-center">CEO & Founder</p>
              <div className="d-flex justify-content-center">
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
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-team-info-box">
              <img src={aboutteamimg4} alt="CEO & Foundere image" />

              <h5 className="text-center">ROBIN JORDAN</h5>
              <p className="text-center">CEO & Founder</p>
              <div className="d-flex justify-content-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
