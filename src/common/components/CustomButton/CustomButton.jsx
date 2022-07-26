import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.scss";

const CustomButton = ({ children }) => {
  return <button className="btn btn-contained">{children}</button>;
};

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default CustomButton;
