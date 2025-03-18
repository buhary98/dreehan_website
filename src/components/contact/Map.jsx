import React from "react";

const Map = () => {
  return (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.6010598964763!2d114.17162871694862!3d22.296358245144713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f212439db5%3A0xa5076249cb4b8344!2sChungking%20Mansions!5e0!3m2!1sen!2sin!4v1742297617411!5m2!1sen!2sin"
        title="Google Map"
        width="100%"
        height="400px"
        frameBorder="0"
        loading="lazy"
        style={{ border: "0" }}
        allowFullScreen
      />
    </div>
  );
};

export default Map;
