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

  const isChecked = useMemo(() => {
    return (
      coveragesSelected &&
      !!coveragesSelected.find((el) => el.code === coverage.code)
    );
  }, [coveragesSelected]);

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

  return (
    <div className="coverage__item">
      <div className="coverage__action" onClick={handleExpand}>
        <img src={coverage.icon} alt="coverage mini" />
        <div className="coverage__container-name">
          <p className="coverage__name">{coverage.name}</p>
        </div>
        <Mobile>
          <div style={{ display: "flex" }}>
            <CustomSwitch
              id={coverage.code}
              isChecked={isChecked}
              onCheckedChange={onCheckedChange}
            />
          </div>
        </Mobile>
        <FromMobile>
          <i className="material-icons">
            {expanded ? "expand_less" : "expand_more"}
          </i>
        </FromMobile>
      </div>
      <Mobile>
        <div className={`coverage__content ${!expanded ? "hide" : ""}`}>
          {coverage.desc}
        </div>
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
    </div>
  );
};

CoverageItem.propTypes = {
  coverage: PropTypes.object,
  coveragesSelected: PropTypes.array,
  setCoveragesSelected: PropTypes.func.isRequired,
};
export default CoverageItem;
