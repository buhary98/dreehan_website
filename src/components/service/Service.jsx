import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import ServiceImg1 from "../../assets/images/service_01.jpg";
import ServiceImg2 from "../../assets/images/service_02.jpg";
import ServiceImg3 from "../../assets/images/service_03.jpg";
import ServiceImg4 from "../../assets/images/service_04.jpg";

import CorporateServicePopup from "./popup/CorporateServicePopup";
import ImmigrationServicePopup from "./popup/ImmigrationServicePopup";
import EmploymentConsultingPopup from "./popup/EmploymentConsultingPopup";
import EORServicePopup from "./popup/EORServicePopup";

import "./Service.css";

const Service = () => {
  const [popupContent, setPopupContent] = useState(null);
  const popupRef = useRef(null);
  const [popupHeight, setPopupHeight] = useState(0);

  const services = [
    {
      id: 1,
      title: "Corporate Service",
      description:
        "Effortless company setup in Hong Kong with compliance, low taxation, and a business-friendly environment.",
      image: ServiceImg1,
      component: <CorporateServicePopup />,
    },
    {
      id: 2,
      title: "Immigration Service",
      description:
        "Expert visa and residency solutions for individuals, families, and businesses expanding to Hong Kong.",
      image: ServiceImg2,
      component: <ImmigrationServicePopup />,
    },
    {
      id: 3,
      title: "Employment Consulting",
      description:
        "Comprehensive recruitment, workforce management, and outsourcing solutions for professionals.",
      image: ServiceImg3,
      component: <EmploymentConsultingPopup />,
    },
    {
      id: 4,
      title: "Employer of Record",
      description:
        "Hire employees in Hong Kong without a legal entity, ensuring compliance and simplified operations.",
      image: ServiceImg4,
      component: <EORServicePopup />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupContent(null);
      }
    };
    if (popupContent) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    if (popupRef.current) {
      setPopupHeight(popupRef.current.clientHeight);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupContent]);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                Our <em>Services</em>
              </h2>
              <span>Reliable support for seamless operations</span>
            </div>
          </div>
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div className="service-item">
                <img src={service.image} alt={service.title} />
                <div className="down-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <button
                    className="filled-button"
                    onClick={() => setPopupContent(service)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupContent && (
        <motion.div
          className="popup-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
        >
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setPopupContent(null)}
            >
              &times;
            </button>
            {React.cloneElement(popupContent.component, { popupHeight })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Service;
