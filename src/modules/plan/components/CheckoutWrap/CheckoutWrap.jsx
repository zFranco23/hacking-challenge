import React from "react";
import PropTypes from "prop-types";
import { commaFormat } from "../../../../utils/number";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../../../common/components/CustomButton/CustomButton";
import "./CheckoutWrap.scss";

const CheckoutWrap = ({ coverages, amountToPay, isValid }) => {
  const navigate = useNavigate();

  const handleThanks = () => {
    navigate("/gracias");
  };

  return (
    <section className="checkout__wrap">
      <div>
        <p className="checkout__title">Monto</p>
        <p className="checkout__amount">{commaFormat(amountToPay)}</p>
        <p className="checkout__text">mensuales</p>
      </div>
      {coverages && coverages.length ? <hr /> : null}
      <div>
        {coverages && coverages.length ? (
          <p className="checkout__secondary-text">El precio incluye:</p>
        ) : null}

        <ul>
          {coverages &&
            coverages.map((c) => (
              <li key={`coverage-selected-${c.code}`}>{c.name}</li>
            ))}
        </ul>
      </div>
      <CustomButton className="button__confirm" onClick={handleThanks}>
        Lo quiero
      </CustomButton>
    </section>
  );
};

CheckoutWrap.propTypes = {
  amountToPay: PropTypes.number,
  coverages: PropTypes.array,
};
export default CheckoutWrap;
