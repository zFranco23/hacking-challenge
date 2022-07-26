import React from "react";

import "./LoaderSpinner.scss";

const LoaderSpinner = () => {
  return (
    <div className="spinner__container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
