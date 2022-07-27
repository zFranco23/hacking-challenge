import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.scss";

const CustomButton = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <button
      className={`btn btn-contained ${className ? className : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CustomButton;
