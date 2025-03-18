import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import PartnerImg1 from "../../assets/images/client-01.png";
import "./Partner.css";

const Partner = () => {
  const partnerImages = [
    { id: 1, src: PartnerImg1, title: "1", alt: "1" },
    { id: 2, src: PartnerImg1, title: "2", alt: "2" },
    { id: 3, src: PartnerImg1, title: "3", alt: "3" },
    { id: 4, src: PartnerImg1, title: "4", alt: "4" },
    { id: 5, src: PartnerImg1, title: "5", alt: "5" },
  ];

  return (
    <div className="partners">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              navigation={false}
              // pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              speed={700}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                460: { slidesPerView: 1, spaceBetween: 0 },
                576: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {partnerImages.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div className="partner-item">
                    <img
                      src={partner.src}
                      title={partner.title}
                      alt={partner.alt}
                      style={{ maxWidth: "156px", margin: "auto" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
