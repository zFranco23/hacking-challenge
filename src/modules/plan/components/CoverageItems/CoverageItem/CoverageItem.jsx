import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Mobile, FromMobile } from "../../../../../utils/responsive";
import CustomSwitch from "../../../../../common/components/CustomSwitch/CustomSwitch";
import "./CoverageItem.scss";

const CoverageItem = ({
  coverage,
  coveragesSelected,
  setCoveragesSelected,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const isCoverageSelected = useMemo(() => {
    return (
      coveragesSelected &&
      !!coveragesSelected.find((el) => el.code === coverage.code)
    );
  }, [coveragesSelected, coverage]);

  const onCheckedChange = (e) => {
    const activate = e.target.checked;
    setCoveragesSelected((prev) => {
      let found = prev.find((el) => el.code === coverage.code);
      if (activate) {
        if (!found) return [...prev, coverage];
        return prev;
      }
      return prev.filter((el) => el.code !== coverage.code);
    });
  };

  const handleSelectCoverage = () => {
    if (isCoverageSelected) {
      setCoveragesSelected((prev) =>
        prev.filter((el) => el.code !== coverage.code)
      );
    } else {
      setCoveragesSelected((prev) => [...prev, coverage]);
    }
  };

  const handleButtonContent = (
    <div className="button-handle" onClick={handleSelectCoverage}>
      <div className="btn btn-handle">
        <i className="material-icons">
          {isCoverageSelected ? "remove" : "add"}
        </i>
      </div>
      <p>{isCoverageSelected ? "QUITAR" : "AGREGAR"}</p>
    </div>
  );
  return (
    <div className="coverage__item">
      <Mobile>
        <div className="coverage__action">
          <img src={coverage.icon} alt="coverage mini" />
          <div className="coverage__container-name">
            <p className="coverage__name">{coverage.name}</p>
          </div>

          <div style={{ display: "flex" }}>
            <CustomSwitch
              id={coverage.code}
              isChecked={isCoverageSelected}
              onCheckedChange={onCheckedChange}
            />
          </div>
        </div>
      </Mobile>

      <FromMobile>
        <div className="coverage__action" onClick={handleExpand}>
          <img src={coverage.icon} alt="coverage mini" />
          <div className="coverage__container-name">
            <p className="coverage__name">{coverage.name}</p>
          </div>
          <i className="material-icons">
            {expanded ? "expand_less" : "expand_more"}
          </i>
        </div>
      </FromMobile>

      <div className={`coverage__content ${!expanded ? "hide" : ""}`}>
        {coverage.desc}
      </div>
      <Mobile>
        <div
          className={`show__less ${expanded ? "expanded" : "hided"}`}
          onClick={handleExpand}
        >
          <p>Ver {expanded ? "menos" : "más"}</p>
          <i className="material-icons">
            {expanded ? "expand_less" : "expand_more"}
          </i>
        </div>
      </Mobile>

      <FromMobile>{handleButtonContent}</FromMobile>
    </div>
  );
};

CoverageItem.propTypes = {
  coverage: PropTypes.object,
  coveragesSelected: PropTypes.array,
  setCoveragesSelected: PropTypes.func.isRequired,
};
export default CoverageItem;
