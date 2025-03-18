import React from "react";
import "./RequestForm.css";

const RequestForm = () => {
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const offset = 100;
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };
  return (
    <div className="request-form">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Request a call back right now?</h4>
            <span>
              Need assistance with business expansion? Get in touch with us
              today for expert guidance.
            </span>
          </div>
          <div className="col-md-4">
            <button
              className="border-button"
              onClick={() => scrollToSection("contactus")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
