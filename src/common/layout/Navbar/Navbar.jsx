import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/login/rimac-logo.svg";
import { FromMobile, Mobile } from "../../../utils/responsive";

import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const isUsualNavbar = useMemo(() => {
    return (
      location && location.pathname && !location.pathname.startsWith("/login")
    );
  }, [location]);

  return (
    <nav className={`navbar ${isUsualNavbar ? "navbar-fixed" : ""}`}>
      <div onClick={() => navigate("/")}>
        <img src={logo} alt="logo rimac" />
      </div>
      <div className="navbar__contact">
        <FromMobile>
          <p className="navbar__contact-text">¿Tienes alguna duda?</p>
        </FromMobile>
        <Mobile>
          <a href="tel: (01) 411 6001" className="link">
            <div className="navbar_phone-wrap">
              <i className="material-icons">phone</i>
              <p style={{ marginLeft: "0.5rem" }}>LLámanos</p>
            </div>
          </a>
        </Mobile>
        <FromMobile>
          <a href="tel: (01) 411 6001" className="link">
            <div className="navbar_phone-wrap">
              <i className="material-icons">phone</i>
              <p>(01) 411 6001</p>
            </div>
          </a>
        </FromMobile>
      </div>
    </nav>
  );
};

export default Navbar;
