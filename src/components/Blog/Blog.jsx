import React from "react";
import "./Blog.css";

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
            <img
              src="/images/blogimg1.jpg"
              alt="Room"
              className="blog-cardimg img-fluid"
            />
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
              src="/images/blogimg2.jpg"
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
              src="/images/blogimg3.jpg"
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
              src="/images/bloglogo1.jpg"
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <img
              src="/images/bloglogo2.jpg"
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-md-block">
            <img
              src="/images/bloglogo3.jpg"
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-md-block">
            <img
              src="/images/bloglogo4.jpg"
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block">
            <img
              src="/images/bloglogo5.jpg"
              alt="Logo"
              className="img-fluid blog-logoimg"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block">
            <img
              src="/images/bloglogo6.jpg"
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
              src="/images/blog-insimg1.webp"
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
              src="/images/blog-insimg2.webp"
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
              src="/images/blog-insimg3.webp"
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
              src="/images/blog-insimg4.webp"
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
              src="/images/blog-insimg5.webp"
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
              src="/images/blog-insimg6.webp"
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
