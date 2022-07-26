import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/login/rimac-logo.png";
import { FromMobile, Mobile } from "../../../utils/responsive";

import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();

  const isUsualNavbar = useMemo(() => {
    return (
      location && location.pathname && !location.pathname.startsWith("/login")
    );
  }, [location]);

  return (
    <nav className={`navbar ${isUsualNavbar ? "navbar-fixed" : ""}`}>
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
    </nav>
  );
};

export default Navbar;
