import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./CustomInput.scss";

const CustomInput = forwardRef(
  (
    { className, onChange, onBlur, name, label, onKeyDown, ...otherProps },
    ref
  ) => {
    return (
      <input
        type="text"
        name={name}
        ref={ref}
        onChange={onChange}
        onKeyDown={onKeyDown ? onKeyDown : null}
        onBlur={onBlur}
        className={`input ${className ? className : ""}`}
        {...otherProps}
      />
    );
  }
);

CustomInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
export default CustomInput;
