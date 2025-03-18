import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ClientImg1 from "../../assets/images/client_01.webp";
import ClientImg2 from "../../assets/images/client_02.webp";
import ClientImg3 from "../../assets/images/client_03.webp";
import ClientImg4 from "../../assets/images/client_04.webp";
import ClientImg5 from "../../assets/images/client_05.webp";
import ClientImg6 from "../../assets/images/client_06.webp";
import ClientImg7 from "../../assets/images/client_07.webp";
import ClientImg8 from "../../assets/images/client_08.webp";

import "swiper/css";
import "swiper/css/pagination";
import "./About.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Tom",
      position: "Founder, Tech Solutions Ltd.",
      feedback:
        "Dreehaan made our Hong Kong company registration seamless. Their expertise, efficiency, and attention to detail ensured a hassle-free process. From documentation to compliance, everything was handled professionally. Highly recommended for businesses looking to establish a presence in Hong Kong.",
      image: ClientImg1,
    },
    {
      name: "Sarah Johnson",
      position: "HR Director, AsiaCorp Ltd.",
      feedback:
        "Expanding to Hong Kong was easy with Dreehaan’s Employer of Record (EOR) services. They handled legal compliance, payroll, and employee management efficiently, allowing us to focus on business growth. Their expertise and professionalism made the transition seamless.",
      image: ClientImg2,
    },
    {
      name: "David Wood",
      position: "CEO, Global Trade Consultants.",
      feedback:
        "Dreehaan’s immigration consulting services were outstanding. They guided me through every step of my business visa application, ensuring compliance with all legal requirements. Their efficiency, professionalism, and clear communication made the process stress-free.",
      image: ClientImg3,
    },
    {
      name: "Andrew Boom",
      position: "Regional Manager, Pacific Logistics Ltd.",
      feedback:
        "They made securing a dependent visa for my family easy. Their step-by-step guidance, prompt responses, and expertise ensured a smooth process. Their attention to detail and professionalism were impressive. I highly recommend them for immigration solutions in Hong Kong.",
      image: ClientImg4,
    },
    {
      name: "Rachel Paul",
      position: "Managing Director, Global Ventures Ltd.",
      feedback:
        "Dreehaan’s virtual office services provided our business with a prestigious Hong Kong address. Their seamless setup, mail handling, and professional support enhanced our corporate presence. Their solutions are ideal for businesses needing flexibility, credibility, and operational.",
      image: ClientImg5,
    },
    {
      name: "Michael Scott",
      position: "CFO, BrightStart Enterprises.",
      feedback:
        "Dreehaan handled our company registration and bank account setup efficiently. Their team managed documentation, compliance, and formalities professionally. The entire process was smooth, fast, and hassle-free. Their expertise made everything effortless, allowing us to focus on business growth.",
      image: ClientImg6,
    },
    {
      name: "James Calen",
      position: "COO, NexGen Enterprises.",
      feedback:
        "Dreehaan’s corporate solutions streamlined our business expansion. Their legal, operational, and compliance expertise ensured a smooth transition. Their efficiency, professionalism, and attention to detail were exceptional. We couldn’t have asked for a better partner.",
      image: ClientImg7,
    },
    {
      name: "Linda George",
      position: "Talent Acquisition Manager, FinTech Innovations.",
      feedback:
        "Dreehaan’s employment consulting services helped us hire top professionals in Hong Kong. Their expertise in workforce management, compliance, and recruitment strategies made hiring seamless. They saved us time, effort, and costs, ensuring we built a strong team.",
      image: ClientImg8,
    },
  ];

  return (
    <div className="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>
            What They Say <em>About Us</em>
          </h2>
          <span>Success stories from our happy clients</span>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={700}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            460: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 25 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="inner-content">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.position}</span>
                  <p>"{testimonial.feedback}"</p>
                </div>
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
