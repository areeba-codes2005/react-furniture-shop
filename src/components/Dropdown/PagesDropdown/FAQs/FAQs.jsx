import React, { useEffect, useRef } from "react";
import "./FAQs.css";

const FAQs = ({ faqs = [] }) => {
  const itemsRef = useRef([]);
  const mid = Math.ceil(faqs.length / 2);

  useEffect(() => {
    [0, mid].forEach((index) => {
      const header = itemsRef.current[index];
      if (header) {
        header.classList.add("active");
        const body = header.nextElementSibling;
        if (body) {
          body.style.maxHeight = body.scrollHeight + "px";
        }
      }
    });
  }, [mid]);

  const toggleAccordion = (index) => {
    const header = itemsRef.current[index];
    const body = header.nextElementSibling;

    const isActive = header.classList.contains("active");

    // Toggle this item only
    header.classList.toggle("active");
    body.style.maxHeight = isActive ? 0 : body.scrollHeight + "px";
  };

  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-6">
          {leftFaqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <div
                className="accordion-item-header"
                ref={(el) => (itemsRef.current[index] = el)}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-md-6">
          {rightFaqs.map((faq, index) => (
            <div className="accordion-item" key={mid + index}>
              <div
                className="accordion-item-header"
                ref={(el) => (itemsRef.current[mid + index] = el)}
                onClick={() => toggleAccordion(mid + index)}
              >
                {faq.question}
              </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
