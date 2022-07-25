import React from "react";
import PropTypes from "prop-types";
import "./CustomInput.scss";

const CustomInput = (props) => {
  const { className, ...otherProps } = props;
  return (
    <input
      type="text"
      className={`input ${className ? className : ""}`}
      {...otherProps}
    />
  );
};

CustomInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
export default CustomInput;
