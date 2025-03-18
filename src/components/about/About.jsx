import React from "react";
import InfoImg from "../../assets/images/more-info.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="more-info" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                <em>About</em> Us
              </h2>
              <span>Your trusted partner for business success</span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="more-info-content">
              <div className="row">
                <div className="col-lg-6 col-md-12 align-self-center">
                  <div className="left-image">
                    <img src={InfoImg} alt="More Info" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 align-self-center">
                  <div className="right-content">
                    <span>Who we are</span>
                    <h2>
                      Get to know about <em>our company</em>
                    </h2>
                    <p>
                      Dreehaan is a trusted partner for businesses and
                      professionals looking to expand in Hong Kong. We
                      specialize in providing seamless corporate solutions,
                      ensuring compliance and efficiency at every step. Our
                      expertise simplifies complex processes, allowing clients
                      to focus on growth and success. With a commitment to
                      excellence, we deliver personalized services tailored to
                      diverse business needs.
                      <br />
                      <br />
                      Whether starting a new venture or scaling operations, we
                      provide the support needed for a smooth and hassle-free
                      experience. Our team stays up to date with Hong Kong’s
                      business regulations, ensuring clients meet all legal
                      requirements effortlessly. By offering expert guidance and
                      strategic solutions, we help businesses thrive in a
                      competitive market.
                    </p>
                    {/* <a href="#" className="filled-button">
                      Read More
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
