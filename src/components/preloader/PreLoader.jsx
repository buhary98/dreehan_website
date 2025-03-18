import React, { useEffect, useState } from "react";
import "./PreLoader.css";

const PreLoader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) preloader.style.visibility = "hidden";
      }, 600);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PreLoader;
