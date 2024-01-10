import React, { Fragment } from "react";
import logo from "../Image/icons/logo-sm.png";
import search from "../Image/icons/search-icon-sm.png";
import cart from "../Image/icons/cart-sm.png";

const Header = () => {
  return (
    <Fragment>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-left"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <div className="headerlog "  >
                
              ☰
              <a className="alogo" href="#">
                    <img src={logo}></img>
                </a>
                </div>
            </button>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill ">
                <li className="nav-item">
                  <a href="#">
                    <img src={logo}></img>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">Store</a>
                </li>
                <li className="nav-item">
                  <a href="#">Mac</a>
                </li>
                <li className="nav-item">
                  <a href="#">iPad</a>
                </li>
                <li className="nav-item">
                  <a href="#">iPhone</a>
                </li>
                <li className="nav-item">
                  <a href="#">Watch</a>
                </li>
                <li className="nav-item">
                  <a href="#">Vision</a>
                </li>
                <li className="nav-item">
                  <a href="#">Airpods</a>
                </li>
                <li className="nav-item">
                  <a href="#">TV&Home</a>
                </li>
                <li className="nav-item">
                  <a href="#"> Entertainment</a>
                </li>
                <li className="nav-item">
                  <a href="#">Accessories</a>
                </li>
                <li className="nav-item">
                  <a href="#">Support</a>
                              </li>
                              <li className="nav-item">
                  <a href="#"> <img src={search} alt="/#" /></a>
                              </li>
                              <li className="nav-item">
                  <a href="#"> <img src={cart} alt="/#" /></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
