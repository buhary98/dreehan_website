import React from "react";
import "./Contact.css";

const contactDetails = [
  {
    icon: "fa-phone",
    title: "Phone",
    description:
      "Speak with our experts directly. Whether it's consultation or assistance, we ensure a seamless communication experience via our phone service.",
    linkText: "+852 5536 4896",
  },
  {
    icon: "fa-envelope",
    title: "Email",
    description:
      "Reach us via email for detailed inquiries, support, or collaborations. Expect prompt responses from our dedicated customer service team.",
    linkText: "info@dreehaan.hk",
  },
  {
    icon: "fa-location-dot",
    title: "Location",
    description:
      "Visit our office for in-person consultations and meetings. We welcome you to discuss your business needs with our experts.",
    linkText:
      "Unit 84, 1/F, Chung King Mansion,<br />36-44 Nathan Road, Tsim Sha Tsui,<br />Kowloon, Hong Kong.",
  },
];

const ContactInformation = () => {
  return (
    <div className="contact-information" id="contactus">
      <div className="container">
        <div className="row">
          <div className="section-heading">
            <h2>
              <em>Connect</em> With Us
            </h2>
            <span>Reach out for expert solutions</span>
          </div>
          {contactDetails.map((item, index) => (
            <div className="col-md-12 col-lg-4" key={index}>
              <div className="contact-item">
                <i className={`fa-solid ${item.icon}`}></i>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {item.title === "Location" ? (
                  <span dangerouslySetInnerHTML={{ __html: item.linkText }} />
                ) : (
                  <span>{item.linkText}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
