import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.scss";

const CustomButton = ({ children, className }) => {
  return (
    <button className={`btn btn-contained ${className ? className : ""}`}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CustomButton;
