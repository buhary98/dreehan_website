import React, { useEffect } from "react";
import "./Facts.css";

const Facts = () => {
  useEffect(() => {
    const isVisible = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    const animateCount = () => {
      const counters = document.querySelectorAll(".count-digit");
      counters.forEach((counter) => {
        if (
          isVisible(counter) &&
          !counter.classList.contains("counter-loaded")
        ) {
          counter.classList.add("counter-loaded");
          const target = +counter.getAttribute("data-count");
          let start = 0;
          const duration = 3000;
          const stepTime = Math.abs(Math.floor(duration / target));
          const updateCounter = () => {
            start += 1;
            counter.textContent = start;
            if (start < target) {
              setTimeout(updateCounter, stepTime);
            } else {
              counter.textContent = target;
            }
          };
          updateCounter();
        }
      });
    };

    const handleScroll = () => animateCount();

    window.addEventListener("scroll", handleScroll);
    animateCount();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fun-facts">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 align-self-center">
            <div className="left-content">
              <span>Empowering your business for lasting growth</span>
              <h2>
                Our solutions for your <em>business growth</em>
              </h2>
              <p>
                We provide comprehensive solutions to help businesses establish,
                expand, and operate seamlessly in Hong Kong. From company
                registration and compliance management to immigration consulting
                and employment solutions, we cover every aspect of business
                growth. Our expert guidance ensures legal and regulatory
                adherence, reducing complexities for entrepreneurs and
                corporations.
                <br />
                <br />
                With tailored strategies, we assist businesses in hiring top
                talent, managing workforce operations, and navigating market
                entry challenges. Our Employer of Record (EOR) services allow
                companies to expand without setting up a legal entity, ensuring
                smooth operations. By leveraging our expertise, businesses can
                focus on innovation, scalability, and long-term success. Let us
                simplify your journey to growth with efficient and reliable
                corporate solutions.
              </p>
              {/* <a href="#" className="filled-button">
                Read More
              </a> */}
            </div>
          </div>
          <div className="col-md-12 col-lg-6 align-self-center">
            <div className="row">
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit" data-count="945">
                    0
                  </div>
                  <div className="count-title">Work Hours</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit" data-count="1280">
                    0
                  </div>
                  <div className="count-title">Great Reviews</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit" data-count="578">
                    0
                  </div>
                  <div className="count-title">Projects Done</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="count-area-content">
                  <div className="count-digit" data-count="26">
                    0
                  </div>
                  <div className="count-title">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
