import React from "react";
import PropTypes from "prop-types";

import "./BottomIndicator.scss";

const BottomIndicator = ({ children }) => {
  return <div className="wrapper background">{children}</div>;
};

BottomIndicator.propTypes = {
  children: PropTypes.node,
};

export default BottomIndicator;
