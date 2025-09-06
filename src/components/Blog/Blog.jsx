import React from "react";
import "./Blog.css";
import blogimg1 from "../../assets/images/blogimg1.jpg";
import blogimg2 from "../../assets/images/blogimg2.jpg";
import blogimg3 from "../../assets/images/blogimg3.jpg";
import bloglogo1 from "../../assets/images/bloglogo1.jpg";
import bloglogo2 from "../../assets/images/bloglogo2.jpg";
import bloglogo3 from "../../assets/images/bloglogo3.jpg";
import bloglogo4 from "../../assets/images/bloglogo4.jpg";
import bloglogo5 from "../../assets/images/bloglogo5.jpg";
import bloglogo6 from "../../assets/images/bloglogo6.jpg";
import bloginsimg1 from "../../assets/images/blog-insimg1.webp";
import bloginsimg2 from "../../assets/images/blog-insimg2.webp";
import bloginsimg3 from "../../assets/images/blog-insimg3.webp";
import bloginsimg4 from "../../assets/images/blog-insimg4.webp";
import bloginsimg5 from "../../assets/images/blog-insimg5.webp";
import bloginsimg6 from "../../assets/images/blog-insimg6.webp";

const Blog = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row g-3 mb-5">
          <h3
            className="blog-heading text-center mt-0"
            data-aos="fade-up"
            data-aos-offset="800"
          >
            Latest From Blog
          </h3>
          <p
            className="blog-title text-center mb-2 mt-0"
            data-aos="fade-up"
            data-aos-offset="800"
          >
            Class aptent taciti sociosqu ad litora torquent per
          </p>
          <div
            className="col-12 col-md-4 col-lg-4"
            data-aos="fade-up"
            data-aos-offset="900"
          >
            <img src={blogimg1} alt="Room" className="blog-cardimg img-fluid" />
            <button type="button" className="blog-subcategory-btn">
              SUB CATEGORY 1
            </button>
            <p className="blog-cardp1">
              <span>Demo Demo. </span>14 July ,2025
            </p>
            <h5 className="blog-card-post-title">
              Nullam ullamcorper nisl quis ornare...
            </h5>
            <p className="blog-card-post-para">
              Suspendisse posuere, diam in bibendum lobortis, turpis ipsum
              aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium
              elit mauris cursus Curabitur...
            </p>
            <button type="button" className="blog-card-btn-read-more">
              Read more<span>&gt;</span>
            </button>
          </div>
          <div
            className="col-12 col-md-4 col-lg-4"
            data-aos="fade-up"
            data-aos-offset="900"
          >
            <img
              src={blogimg2}
              alt="Kitchen"
              className="blog-cardimg img-fluid"
            />
            <button type="button" className="blog-subcategory-btn">
              SUB CATEGORY 1
            </button>
            <p className="blog-cardp1">
              <span>Demo Demo. </span>14 July ,2025
            </p>
            <h5 className="blog-card-post-title">
              Turpis at eleifend leo mi elit Aenean porta...
            </h5>
            <p className="blog-card-post-para">
              Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc
              urna Morbi fringilla vitae orci convallis condimentum auctor sit
              dui. Urna pretium elit...
            </p>
            <button type="button" className="blog-card-btn-read-more">
              Read more<span>&gt;</span>
            </button>
          </div>
          <div
            className="col-12 col-md-4 col-lg-4"
            data-aos="fade-up"
            data-aos-offset="900"
          >
            <img
              src={blogimg3}
              alt="Living Room"
              className="blog-cardimg img-fluid"
            />
            <button type="button" className="blog-subcategory-btn">
              SUB CATEGORY 1
            </button>
            <p className="blog-cardp1">
              <span>Demo Demo. </span>14 July ,2025
            </p>
            <h5 className="blog-card-post-title">
              Morbi condimentum molestie Nam enim...
            </h5>
            <p className="blog-card-post-para">
              Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur
              elit ipsum. Enim ipsum hendrerit Suspendisse turpis laoreet fames
              tempus ligula pede ac. Et...
            </p>
            <button type="button" className="blog-card-btn-read-more">
              Read more<span>&gt;</span>
            </button>
          </div>
        </div>
        <div
          className="row g-3 mt-5 blog-logorow"
          data-aos="zoom-in"
          data-aos-offset="900"
        >
          <div className="col-6 col-md-3 col-lg-2">
            <img
              src={bloglogo1}
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <img
              src={bloglogo2}
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-md-block">
            <img
              src={bloglogo3}
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-md-block">
            <img
              src={bloglogo4}
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block">
            <img
              src={bloglogo5}
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block">
            <img
              src={bloglogo6}
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
        </div>
        <div className="row g-3 mb-5">
          <h3
            className="text-center blog-inshead"
            data-aos="fade-up"
            data-aos-offset="900"
          >
            Follow us on Instagram
          </h3>
          <a
            href="#"
            className="text-center blog-inslink"
            data-aos="fade-up"
            data-aos-offset="900"
          >
            @ Rubix In Instagram
          </a>
          <div
            className="col-4 col-md-3 col-lg-2"
            data-aos="zoom-in"
            data-aos-offset="900"
          >
            <img
              src={bloginsimg1}
              alt="Chair"
              className="img-fluid blog-insimg"
            />
          </div>
          <div
            className="col-4 col-md-3 col-lg-2"
            data-aos="zoom-in"
            data-aos-offset="900"
          >
            <img
              src={bloginsimg2}
              alt="Chairs"
              className="img-fluid blog-insimg"
            />
          </div>
          <div
            className="col-4 col-md-3 col-lg-2"
            data-aos="zoom-in"
            data-aos-offset="900"
          >
            <img
              src={bloginsimg3}
              alt="Lamp"
              className="img-fluid blog-insimg"
            />
          </div>
          <div
            className="col-6 col-md-3 col-lg-2 d-none d-md-block"
            data-aos="zoom-in"
            data-aos-offset="900"
          >
            <img
              src={bloginsimg4}
              alt="Table"
              className="img-fluid blog-insimg"
            />
          </div>
          <div
            className="col-6 col-md-3 col-lg-2 d-none d-lg-block"
            data-aos="zoom-in"
            data-aos-offset="900"
          >
            <img
              src={bloginsimg5}
              alt="Two Seater Sofa"
              className="img-fluid blog-insimg"
            />
          </div>
          <div
            className="col-6 col-md-3 col-lg-2 d-none d-lg-block"
            data-aos="zoom-in"
            data-aos-offset="900"
          >
            <img
              src={bloginsimg6}
              alt="Table"
              className="img-fluid blog-insimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
