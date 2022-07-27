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
import CoverageSelect from "./CoverageSelect/CoverageSelect";
import { usePrevious } from "../../../utils/state";
import Stepper from "./Stepper/Stepper";

const MakeYourPlan = (props) => {
  const { user, isFetchingCar, fetchCarFn, car } = props;

  const navigate = useNavigate();

  const [coveragesSelected, setCoveragesSelected] = useState([]);
  const { register, watch, setValue } = useForm({
    defaultValues: {
      amount: "12500",
    },
  });
  const { amount } = watch();

  const prevAmount = usePrevious(amount);

  const amountWasMajor = useMemo(() => {
    const n = Number(prevAmount);
    return !isNaN(n) && n > 16000;
  }, [prevAmount]);

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
      <FromMobile>
        <div className="back-button" onClick={() => navigate(-1)}>
          <div className="back-button-container">
            <i className="material-icons">keyboard_arrow_left</i>
          </div>
          <p>volver</p>
        </div>
      </FromMobile>
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

  const selectCoverageContet = (
    <section>
      <div className="coverages">
        <div className="coverages__title-wrap">
          <p className="coverages__title">Agrega o quita coberturas</p>
        </div>
        <CoverageSelect />
        <CoverageItems
          coveragesSelected={coveragesSelected}
          setCoveragesSelected={setCoveragesSelected}
          coverages={coverages}
        />
      </div>
    </section>
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
  }, [car, fetchCarFn]);

  useEffect(() => {
    if (isOutOfMayorRange) {
      const newCoverage = coveragesSelected.filter((c) => c.code !== "CH_LR");
      setCoveragesSelected(newCoverage);
    } else if (
      typeof amountWasMajor === "boolean" &&
      amountWasMajor &&
      !isOutOfMayorRange
    ) {
      const hasAlreadyCoveraged = coveragesSelected.find(
        (c) => c.code === "CH_LR"
      );
      if (!hasAlreadyCoveraged) {
        const chLr = coverages.find((c) => c.code === "CH_LR");
        setCoveragesSelected((prev) => [...prev, chLr]);
      }
    }
  }, [amount, amountWasMajor, coveragesSelected, isOutOfMayorRange]);

  useEffect(() => {
    if (typeof amount === "undefined" || amount === "") {
      setCoveragesSelected([]);
    }
  }, [amount]);

  return (
    <div className="plan__main">
      {isFetchingCar && <LoaderSpinner />}
      <Mobile>
        <div className="progress__container">
          <div
            className="back-button back-button-gray"
            onClick={() => navigate(-1)}
          >
            <div className="back-button-container">
              <i className="material-icons">keyboard_arrow_left</i>
            </div>
          </div>
          <div>
            <p>PASO 2 DE 2</p>
          </div>
          <div className="progress__bar" />
        </div>
      </Mobile>
      <div className="plan__info bg-lightblue">
        <Mobile>{!isFetchingCar && planInfo}</Mobile>
        <FromMobile>
          <Stepper />
        </FromMobile>
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
                    <input
                      type="number"
                      min={12500}
                      max={16500}
                      {...register("amount", {
                        min: 12500,
                        max: 16500,
                      })}
                    />
                  </div>
                </div>{" "}
                <button onClick={() => handleUpdateAmount("100")}>
                  <i className="material-icons">add</i>
                </button>
              </div>
            </div>
          </div>
          <div className="desktop" style={{ height: "fit-content" }}>
            {selectCoverageContet}
          </div>
        </div>
        <div
          className="plan__car-right-content desktop"
          style={{ height: "fit-content" }}
        >
          <CheckoutWrap
            amountToPay={amountToPay}
            coverages={coveragesSelected}
          />
        </div>
      </div>
      <Mobile>{selectCoverageContet}</Mobile>
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
