import React from "react";
import PropTypes from "prop-types";

import "./CustomCheckbox.scss";

const CustomCheckbox = ({ label }) => {
  return (
    <label className="control control-checkbox">
      {label}
      <input type="checkbox" />
      <div className="control_indicator"></div>
    </label>
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.node,
};

export default CustomCheckbox;
