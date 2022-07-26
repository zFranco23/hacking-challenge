import React, { useState } from "react";

import CustomButton from "../../../common/components/CustomButton/CustomButton";
import CustomCheckbox from "../../../common/components/CustomCheckbox/CustomCheckbox";
import CustomInput from "../../../common/components/CustomInput/CustomInput";

import carGirlMobile from "../../../assets/img/login/girl-car.png";
import carGirlDesktop from "../../../assets/img/login/girl-desktop.png";
import { Mobile, FromMobile } from "../../../utils/responsive";

import "./Login.scss";
import { useForm } from "react-hook-form";
import LoaderSpinner from "../../../common/components/LoaderSpinner/LoaderSpinner";

const docOptions = [
  { value: "DNI", name: "DNI" },
  { value: "C.E", name: "C.E" },
];

const Login = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [docType, setDocType] = useState("DNI");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (values) => {
    console.log(values);
  };

  const contentTitle = (
    <>
      <p className="login__title-text2">¡NUEVO!</p>
      <h1 className="login__title-text">
        <Mobile>
          Seguro Vehicular <br />
          <span>Tracking</span>
        </Mobile>
        <FromMobile>
          Seguro{" "}
          <span>
            Vehicular <br />
            Tracking
          </span>
        </FromMobile>
      </h1>
      <p className="login__title-text3">
        Cuentanos donde le harás{" "}
        <Mobile>
          <br />
        </Mobile>
        seguimiento a tu seguro
      </p>
    </>
  );

  const handleSelectDocType = (type) => {
    setDocType(type);
  };

  const selectorInput = (
    <div className="select__input">
      <div
        className="select__input-type"
        onClick={() => setOpenSelect((prev) => !prev)}
      >
        <div>{docType}</div>
        {openSelect && (
          <div className="select__input-type-float">
            {docOptions.map((dt) => (
              <div
                key={`type-${dt.name}`}
                className={`item ${docType === dt.value ? "selected" : ""}`}
                onClick={() => handleSelectDocType(dt.value)}
              >
                {dt.name}
              </div>
            ))}
          </div>
        )}

        <i className="material-icons">
          {openSelect ? "expand_less" : "expand_more"}
        </i>
      </div>
      <CustomInput
        type="number"
        className="input__document"
        placeholder="Nro. de doc"
        {...register("documento", { required: true, pattern: /^[0-9]{8,15}/ })}
      />
    </div>
  );

  return (
    <div className="login__main">
      <div className="login__title">
        <Mobile>
          {contentTitle}
          <img
            className="login__title-girl"
            src={carGirlMobile}
            alt="car girl"
          />
        </Mobile>
        <FromMobile>
          <div className="login__wrap-desktop">
            <img
              className="login__title-girl"
              src={carGirlDesktop}
              alt="car girl"
            />
            <div>{contentTitle}</div>
          </div>
        </FromMobile>
      </div>

      <div className="form__container">
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <h2 className="form__title">Déjanos tus datos</h2>
          <div className="input__wrap">
            {selectorInput}
            {errors && errors.documento ? (
              <p className="error__text">*Campo inválido</p>
            ) : (
              ""
            )}
          </div>
          <div className="input__wrap">
            <CustomInput
              type="number"
              min="0"
              placeholder="Celular"
              {...register("celular", {
                required: true,
                pattern: /^[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6}$/,
              })}
            />
            {errors && errors.celular ? (
              <p className="error__text">*Campo inválido</p>
            ) : (
              ""
            )}
          </div>
          <div className="input__wrap">
            <CustomInput
              type="text"
              placeholder="Placa"
              {...register("placa", {
                required: true,
                minLength: 7,
                maxLength: 7,
                pattern: /^([A-Z0-9]{2,3}-\d{3,4})$/,
              })}
            />
            {errors && errors.placa ? (
              <p className="error__text">*Campo inválido</p>
            ) : (
              ""
            )}
          </div>

          <div className="input__wrap">
            <CustomCheckbox
              text={
                <p className="text-politics">
                  Acepto la <a> Política de Protecciòn de Datos Personales</a> y
                  los <a>Términos y Condiciones.</a>
                </p>
              }
              {...register("terminos", { required: true })}
            />
            {errors && errors.terminos ? (
              <p className="error__text">
                *Debes aceptar nuestra política de protección de datos
                personales y nuestros términos de condiciones
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="button__container">
            <CustomButton type="submit">COTÍZALO</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
