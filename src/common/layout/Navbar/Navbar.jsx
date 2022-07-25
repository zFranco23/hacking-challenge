import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/rimac-logo.png";
import { FromMobile, Mobile } from "../../../utils/responsive";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <a href="/">
        <img src={logo} alt="logo rimac" />
      </a>

      <div className="navbar__contact">
        <FromMobile>
          <p className="navbar__contact-text">¿Tienes alguna duda?</p>
        </FromMobile>
        <Mobile>
          <p>Llámanos</p>
        </Mobile>
        <FromMobile>
          <p>(01) 411 6001</p>
        </FromMobile>
      </div>
    </navbar>
  );
};

export default Navbar;
