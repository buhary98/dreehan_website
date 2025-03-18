import React from "react";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    draggable: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

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
    <div className="main-banner header-text" id="home">
      <Slider className="Modern-Slider" {...settings}>
        <div className="item item-1">
          <div className="img-fill slide-1">
            <div className="text-content">
              <h6>we have a solid background</h6>
              <h4>Seamless Growth</h4>
              <p>
                Dreehaan is your trusted partner in business expansion, offering
                seamless solutions to help companies and professionals establish
                and grow in Hong Kong. With our expertise and client-focused
                approach, we simplify complex processes, ensuring a smooth and
                hassle-free experience.
              </p>
              <button
                className="filled-button"
                onClick={() => scrollToSection("about")}
              >
                Know more
              </button>
            </div>
          </div>
        </div>
        <div className="item item-2">
          <div className="img-fill slide-2">
            <div className="text-content">
              <h6>we are here to support you</h6>
              <h4>Business Solutions</h4>
              <p>
                At Dreehaan, we offer company registration, immigration
                consulting, employment consulting, and Employer of Record (EOR)
                services in Hong Kong. Our expert team ensures a seamless and
                compliant experience, simplifying legal, financial, and
                operational complexities for businesses and professionals.
              </p>
              <button
                className="filled-button"
                onClick={() => scrollToSection("services")}
              >
                our services
              </button>
            </div>
          </div>
        </div>
        <div className="item item-3">
          <div className="img-fill slide-3">
            <div className="text-content">
              <h6>we are ready to help you</h6>
              <h4>Get In Touch</h4>
              <p>
                Need assistance with business expansion in Hong Kong? Contact us
                for expert guidance on company registration, immigration,
                employment, and EOR services. We’re here to help you navigate
                every step with ease.
              </p>
              <button
                className="filled-button"
                onClick={() => scrollToSection("contactus")}
              >
                contact us
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Custom Arrow components for slick-slider
const PrevArrow = (props) => {
  const { onClick } = props;
  return <button className="PrevArrow" onClick={onClick} />;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <button className="NextArrow" onClick={onClick} />;
};

export default Banner;
