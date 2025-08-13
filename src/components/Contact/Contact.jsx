import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 ps-sm-0 ps-md-5">
            <h5 className="con-store-info-heading">Store information</h5>
            <div className="d-flex">
              <span className="con-store-map-icon">
                <FaMapMarkerAlt />
              </span>
              <div className="mt-2 ms-3">
                <span className="con-store-address">
                  {" "}
                  Vt Interior Elements <br /> United States
                </span>
              </div>
            </div>
            <hr className="con-custom-line" />
            <div className="d-flex">
              <span className="con-store-email-icon">
                <MdEmail />
              </span>
              <div className="mt-2 ms-3">
                <span className="con-store-email">
                  {" "}
                  Email us: <br /> demo@demo.com
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-8 d-flex flex-column">
            <hr className="con-custom-line" />
            <h4 className="contact-heading">CONTACT US</h4>
            <label htmlFor="subject" className="contact-label">
              Subject
            </label>
            <select className="form-select" id="subject" defaultValue="customer service">
              <option value="customer service">Customer service</option>
              <option value="webmaster">Webmaster</option>
            </select>
            <label htmlFor="email" className="contact-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="Your@email.com"
              className="form-control"
              id="email"
            />
            <label htmlFor="attachment" className="contact-label">
              Attachment
            </label>
            <div className="d-flex">
              <input type="text" className="form-control inp-dis" disabled />
              <label className="custom-file-button">
                Choose File
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
            <span className="input-optional-note">optional</span>
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="How can we help?"
              className="form-control"
              id="message"
            ></textarea>
            <button type="submit" className="con-send-btn">
              Send
            </button>
            <hr className="con-custom-line mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
