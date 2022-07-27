import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import BottomIndicator from "../../../common/components/BottomIndicator/BottomIndicator";
import CustomButton from "../../../common/components/CustomButton/CustomButton";

import { Mobile, FromMobile } from "../../../utils/responsive";
import boyInfo from "../../../assets/img/placa/boy-info.svg";
import boyInfoDesktop from "../../../assets/img/placa/boy-info-desktop.svg";
import { coverages } from "../../../constants";
import CheckoutWrap from "./CheckoutWrap/CheckoutWrap";
import { commaFormat } from "../../../utils/number";

import "./MakeYourPlan.scss";
import LoaderSpinner from "../../../common/components/LoaderSpinner/LoaderSpinner";
import CoverageItems from "./CoverageItems/CoverageItems";

const MakeYourPlan = (props) => {
  const { user, isFetchingCar, fetchCarFn, car } = props;

  const navigate = useNavigate();

  const [coveragesSelected, setCoveragesSelected] = useState([]);
  const { register, watch, setValue } = useForm({
    defaultValues: {
      amount: "0",
    },
  });

  const { amount } = watch();

  const amountToPay = useMemo(() => {
    let amountTemp = 20;
    if (coveragesSelected) {
      amountTemp = coveragesSelected.reduce(
        (acc, a) => acc + Number(a.price),
        20
      );
    }
    return amountTemp;
  }, [coveragesSelected]);

  const shortName = useMemo(() => {
    return user && user.name ? user.name.split(" ")[0] : "";
  }, [user]);

  const handleGoThanks = () => {
    navigate("/gracias");
  };

  const bottomContent = (
    <div className="plan__wrap-cost">
      <div className="plan__cost-text">
        <p className="plan__cost-number">{commaFormat(amountToPay)}</p>
        <p className="plan__cost-frecuency">Mensual</p>
      </div>
      <CustomButton className="plan__cost-btn" onClick={handleGoThanks}>
        Lo quiero
      </CustomButton>
    </div>
  );

  const infoAmount = (
    <>
      <p className="amount-title">Indica la suma asegurada</p>
      <div className="amount-wrap">
        <div className="ammount-quantity">MIN $ 12.500</div>
        <hr className="hr" />
        <div className="ammount-quantity">MAX $ 16.500</div>
      </div>
    </>
  );

  const planInfo = (
    <>
      <Mobile>
        <h1 className="plan__info-title">Mira las coberturas</h1>
      </Mobile>
      <h1 className="plan__info-title desktop">
        ¡Hola, <span>{shortName}!</span>
      </h1>
      <p className="plan__info-subtitle">Conoce las coberturas para tu plan</p>
      <div className="plan__card">
        <div className="float-boy">
          <Mobile>
            <img src={boyInfo} alt="info boy" />
          </Mobile>
          <FromMobile>
            <img src={boyInfoDesktop} alt="info boy" />
          </FromMobile>
        </div>
        <p className="plan__car-number">Placa: {user ? user.placa : ""}</p>
        <p className="plan__car-desc">
          {car ? car.make : "Wolkswagen"} {car ? car.year : "2019"} <br />
          {car ? car.model : "Golf"}
        </p>
      </div>
    </>
  );

  const handleUpdateAmount = (q) => {
    const n = Number(amount);
    const quantity = Number(q);
    if (!isNaN(n) && !isNaN(quantity)) {
      setValue("amount", n + quantity);
    } else {
      setValue(0);
    }
  };

  const isOutOfMayorRange = useMemo(() => {
    const a = Number(amount);
    return !isNaN(a) && a > 16000;
  }, [amount]);

  useEffect(() => {
    if (!car) {
      fetchCarFn();
    }
  }, [car]);

  useEffect(() => {
    if (isOutOfMayorRange) {
      const newCoverage = coveragesSelected.filter((c) => c.code !== "CH_LR");
      setCoveragesSelected(newCoverage);
    } else {
      const hasAlreadyCoveraged = coveragesSelected.find(
        (c) => c.code === "CH_LR"
      );
      if (!hasAlreadyCoveraged) {
        const chLr = coverages.find((c) => c.code === "CH_LR");
        setCoveragesSelected((prev) => [...prev, chLr]);
      }
    }
  }, [amount]);

  useEffect(() => {
    if (typeof amount === undefined || amount === "") {
      setCoveragesSelected([]);
    }
  }, [amount]);

  return (
    <div className="plan__main">
      {isFetchingCar && <LoaderSpinner />}
      <div className="plan__info bg-lightblue">
        <Mobile>{!isFetchingCar && planInfo}</Mobile>
      </div>
      <div className="plan__car-content">
        <div className="plan__car-left-content">
          <div className="desktop">{!isFetchingCar && planInfo}</div>
          <div className="amount_input-wrap">
            <div className="amount">{infoAmount}</div>
            <div className="input__wrap">
              <div className="input__component">
                <button onClick={() => handleUpdateAmount("-100")}>
                  <i className="material-icons">remove</i>
                </button>
                <div className="currency-wrap">
                  <div className="currency-content">
                    <div>$</div>
                    <input type="number" min={0} {...register("amount")} />
                  </div>
                </div>{" "}
                <button onClick={() => handleUpdateAmount("100")}>
                  <i className="material-icons">add</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <FromMobile>
          <div className="plan__car-right-content">
            <CheckoutWrap
              amountToPay={amountToPay}
              coverages={coveragesSelected}
            />
          </div>
        </FromMobile>
      </div>
      <Mobile>
        <section>
          <div className="coverages">
            <div className="coverages__title-wrap">
              <p className="coverages__title">Agrega o quita coberturas</p>
            </div>
            <CoverageItems
              coveragesSelected={coveragesSelected}
              setCoveragesSelected={setCoveragesSelected}
              coverages={coverages}
            />
          </div>
        </section>
      </Mobile>

      <BottomIndicator>{bottomContent}</BottomIndicator>
    </div>
  );
};

MakeYourPlan.propTypes = {
  user: PropTypes.object,
  isFetchingCar: PropTypes.bool,
  fetchCarFn: PropTypes.func.isRequired,
};
export default MakeYourPlan;
