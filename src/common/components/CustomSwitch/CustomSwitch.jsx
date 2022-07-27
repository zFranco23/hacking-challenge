import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./CustomSwitch.scss";

const CustomSwitch = ({ id, onCheckedChange, isChecked }) => {
  const customId = `switch-${id}`;

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const onChange = (e) => {
    setChecked(e.target.checked);
    onCheckedChange(e);
  };

  return (
    <>
      <input
        checked={checked}
        type="checkbox"
        id={customId}
        onChange={onChange}
      />
      <label className="label-switch" htmlFor={customId}>
        Toggle
      </label>
    </>
  );
};

CustomSwitch.propTypes = {
  onCheckedChange: PropTypes.func.isRequired,
};

export default CustomSwitch;
