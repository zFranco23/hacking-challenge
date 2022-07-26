import React from "react";

import boyMobile from "../../../assets/img/thanks/boy-mobile.png";
import boyDesktop from "../../../assets/img/thanks/boy-desktop.png";
import CustomButton from "../../../common/components/CustomButton/CustomButton";
import { FromMobile, Mobile } from "../../../utils/responsive";

import "./Thanks.scss";

const Thanks = () => {
  return (
    <div className="thanks__main">
      <div className="thanks__container-img">
        <Mobile>
          <img src={boyMobile} alt="boy rimac" />
        </Mobile>

        <div className="float-boy">
          <img src={boyDesktop} alt="boy rimac" />
        </div>
      </div>
      <div className="thanks__text-wrap">
        <div className="thanks__wrap">
          <h4>
            <Mobile>
              ¡Te damos la bienvenida! <br />
              <span>
                Cuenta con nosotros <br />
                para proteger tu vehículo
              </span>
            </Mobile>
            <FromMobile>
              ¡Te damos la bienvenida! <br />
              <span>
                Cuenta con nosotros para <br /> proteger tu vehículo
              </span>
            </FromMobile>
          </h4>

          <p className="text-confirmation">
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a{" "}
            {""}
            <FromMobile>
              <br />
            </FromMobile>
            tu correo:{" "}
            <FromMobile>
              <br />
            </FromMobile>
            <span>joel.sanchez@gmail.com</span>
          </p>

          <CustomButton className="btn__use">Cómo usar mi seguro</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
