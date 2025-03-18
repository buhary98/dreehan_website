import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

const CallBackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    try {
      const result = await emailjs.sendForm(
        "service_igeb57k",
        "template_rgrm3do",
        e.target,
        "t6u7vty3zp_TQLp1B"
      );
      console.log(result.text);
      setFormSuccess("Mission Accomplished!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormError("Oops! Give it Another Shot.");
    }

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    e.target.reset();

    setTimeout(() => {
      setFormError(null);
      setFormSuccess(null);
    }, 4000);
  };

  return (
    <div className="callback-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                Send Us A <em>Message</em>
              </h2>
              <span>Your queries matter - message us anytime!</span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-form">
              <form id="contact" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-Mail Address"
                        className="form-control"
                        pattern="[^ @]+@[^ @]+\.[a-zA-Z]{2,}"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    {formError && <p className="form-error">{formError}</p>}
                    {formSuccess && (
                      <p className="form-success">{formSuccess}</p>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" className="border-button">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBackForm;
