import React, { useEffect, useState, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650);
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleNavbar = (event) => {
    event.stopPropagation();
    setIsNavbarOpen(!isNavbarOpen);
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
    setIsNavbarOpen(false); // Close navbar after clicking a link
  };

  const restartSite = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <header className={isScrolled ? "background-header" : ""}>
      <nav className="navbar navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <a className="navbar-brand" href="/" onClick={restartSite}>
            <h2>DREEHAN</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              {["home", "services", "about", "contactus"].map((id) => (
                <li className="nav-item" key={id}>
                  <button
                    className="nav-link"
                    onClick={() => scrollToSection(id)}
                  >
                    {id.replace(/us/, " Us").charAt(0).toUpperCase() +
                      id.replace(/us/, " Us").slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
