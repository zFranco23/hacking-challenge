import React from "react";

import "./Stepper.scss";

const steps = [
  {
    name: "Datos",
    key: 0,
  },
  {
    name: "Arma tu plan",
    key: 1,
  },
];
const Stepper = ({ current = 1 }) => {
  return (
    <div className="stepper">
      <div className="line_float" />
      {steps.map((s, idx) => (
        <div className="step">
          <div
            className={`step__number-wrap ${
              current === s.key ? "step__number-wrap_current" : ""
            }`}
          >
            <p className="step__number">{idx + 1}</p>
          </div>
          <p className="step__name">{s.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
