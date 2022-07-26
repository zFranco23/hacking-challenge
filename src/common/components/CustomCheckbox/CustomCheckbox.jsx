import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import "./CustomCheckbox.scss";

const CustomCheckbox = forwardRef(
  ({ text, onChange, onBlur, name, label, ...otherProps }, ref) => {
    return (
      <label className="control control-checkbox">
        {text}
        <input
          type="checkbox"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="control_indicator"></div>
      </label>
    );
  }
);

CustomCheckbox.propTypes = {
  text: PropTypes.node,
};

export default CustomCheckbox;
