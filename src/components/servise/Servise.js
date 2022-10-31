import {
  DotsServices,
  DotsServicesBottomBox,
} from "../../global-styled/Global.Styled";
import { ServiseWrapper } from "./Servise.styled";
import line2 from "../../assets/images/line2.png";
import UnevenSetsFinite from "../slider/Slider";
import leafLeft from "../../assets/icon/leaf-left.svg";
import leafRight from "../../assets/icon/leaf-right.svg";

function Servise() {
  return (
    <ServiseWrapper>
      <div className="Wrapper">
        <div className="servise-left">
          <div className="circle-center"></div>
          <DotsServices dots={56} />
        </div>
        <div className="servise-right">
          <div className="title">
            <h3>Наши услуги</h3>
            <p>Лечение хронических заболеваний вен и лимфатических сосудов</p>
          </div>
          <div className="line">
            <img src={line2} alt="" />
          </div>
          <div className="leaf-box">
            <img className="leaf-left" src={leafLeft} alt="" />
            <img className="leaf-right" src={leafRight} alt="" />
          </div>
          <DotsServicesBottomBox dots={56} />
        </div>
      </div>
      <div className="corusel">
        <UnevenSetsFinite />
      </div>
    </ServiseWrapper>
  );
}

export default Servise;
