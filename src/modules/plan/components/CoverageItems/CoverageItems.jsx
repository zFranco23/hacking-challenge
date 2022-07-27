import React from "react";
import PropTypes from "prop-types";
import CoverageItem from "./CoverageItem/CoverageItem";

import "./CoverageItems.scss";
const CoverageItems = (props) => {
  const { coverages, coveragesSelected, setCoveragesSelected } = props;
  return (
    <div className="coverages__container">
      {coverages.map((c) => (
        <CoverageItem
          key={`coverage-${c.code}`}
          coverage={c}
          coveragesSelected={coveragesSelected}
          setCoveragesSelected={setCoveragesSelected}
        />
      ))}
    </div>
  );
};

CoverageItems.propTypes = {
  coverages: PropTypes.array,
  coveragesSelected: PropTypes.array,
  setCoveragesSelected: PropTypes.func.isRequired,
};

export default CoverageItems;
