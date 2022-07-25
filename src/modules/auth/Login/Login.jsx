import React from "react";

import carGirlMobile from "../../../assets/img/login/girl-car.png";
import CustomButton from "../../../common/components/CustomButton/CustomButton";
import CustomCheckbox from "../../../common/components/CustomCheckbox/CustomCheckbox";
import CustomInput from "../../../common/components/CustomInput/CustomInput";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login__main">
      <div className="login__title">
        <p className="login__title-text2">¡NUEVO!</p>
        <h1 className="login__title-text">
          Seguro Vehicular <br />
          <span>Tracking</span>
        </h1>
        <p className="login__title-text3">
          Cuentanos donde le harás <br />
          seguimiento a tu seguro
        </p>

        <img className="login__title-girl" src={carGirlMobile} alt="car girl" />
      </div>

      <div className="form__container">
        <form className="form">
          <h2 className="form__title">Déjanos tus datos</h2>
          <CustomInput placeholder="Celular" type="email" />
          <CustomInput placeholder="Placa" />
          <CustomCheckbox
            label={
              <p className="text-politics">
                Acepto la <a> Política de Protecciòn de Datos Personales</a> y
                los <a>Términos y Condiciones.</a>
              </p>
            }
          />
          <div className="button__container">
            <CustomButton>COTÍZALO</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
