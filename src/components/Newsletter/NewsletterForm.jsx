import "./NewsletterForm.css";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { PiBrowserBold } from "react-icons/pi";
import { BsBoxArrowUpRight } from "react-icons/bs";

const NewsletterForm = () => {
  return (
    <div>
      <section className="sec4 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-10">
              <div className="content" data-aos="zoom-in" data-aos-offset="900">
                <h3>Subcribe To Our Newsletter</h3>
                <p className="text-center">
                  Sign up for the weekly newsletter and build better ecommerce
                  stores.
                </p>
                <form className="mt-3 mb-5">
                  <input type="email" id="" placeholder="Your email address" />
                  <button type="button">Subscribe</button>
                </form>
                <p className="text-center">
                  We respect your privacy, so we never share your info.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row info-row gx-5">
          <div
            className="col-12 col-md-4 col-lg-4 text-center info-box"
            data-aos="fade-up"
            data-aos-offset="900"
          >
            <div className="info info-1">
              <span className="info-icon">
                <PiAirplaneTiltBold />
              </span>
              <h6>Free Worldwide Shipping</h6>
              <p>On all orders over $75.00</p>
              <a href="#">
                Learn More<span>&gt;</span>
              </a>
            </div>
          </div>
          <div
            className="col-12 col-md-4 col-lg-4 text-center info-box"
            data-aos="fade-down"
            data-aos-offset="900"
          >
            <div className="info info-2">
              <span className="info-icon">
                {" "}
                <PiBrowserBold />
              </span>
              <h6>100% Payment Secure</h6>
              <p>We ensure secure payment with PEV</p>
              <a href="#">
                Learn More<span>&gt;</span>
              </a>
            </div>
          </div>
          <div
            className="col-12 col-md-4 col-lg-4 text-center"
            data-aos="fade-up"
            data-aos-offset="900"
          >
            <div className="info">
              <span className="info-icon">
                <BsBoxArrowUpRight />
              </span>
              <h6>30 Days Return</h6>
              <p>Return it within 20 day for an exchange</p>
              <a href="#">
                Learn Mor
                <span>&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
