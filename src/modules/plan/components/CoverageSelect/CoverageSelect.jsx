import React, { useState } from "react";

import "./CoverageSelect.scss";

const optTypeCoverage = [
  {
    name: (
      <p>
        Protege a <br /> tu auto
      </p>
    ),
  },
  {
    name: (
      <p>
        Protege a los <br /> que te rodean
      </p>
    ),
  },
  {
    name: (
      <p>
        mejora tu <br /> plan
      </p>
    ),
  },
];
const CoverageSelect = () => {
  const [selected, setSelected] = useState(0);

  const handleSelectType = (idx) => {
    setSelected(idx);
  };
  return (
    <div className="coverage-select">
      {optTypeCoverage.map((el, idx) => (
        <div
          className={`single__coverage-select ${
            selected === idx ? "single__coverage-select-selected" : ""
          }`}
          key={`type-coverage-${idx}`}
          onClick={() => handleSelectType(idx)}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default CoverageSelect;
