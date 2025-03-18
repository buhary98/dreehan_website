import React from "react";
import "./Header.css";

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <ul className="left-info">
              <li>
                <a href="#">
                  <i className="fa fa-clock"></i>Mon-Fri 09:00-17:00
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i>090-080-0760
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="right-icons">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
