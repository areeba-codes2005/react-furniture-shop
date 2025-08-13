import React from "react";
import "./TermsAndCon.css";

const TermsAndCon = ({ data }) => {
  if (!data || !data.rules) return null;
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <h4 className="terms-and-conditions-heading">{data.heading}</h4>
          {data.rules.map((rule, index) => (
            <div className="col-12" key={index}>
              <h5 className="terms-and-conditions-title">{rule.title}</h5>
              <p className="terms-and-conditions-para">{rule.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndCon;
