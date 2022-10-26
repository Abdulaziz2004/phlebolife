import {
  DotsServices,
  DotsServicesBottomBox,
} from "../../global-styled/Global.Styled";
import { ServiseWrapper } from "./Servise.styled";
import line2 from "../../assets/images/line2.png";
import UnevenSetsFinite from "../slider/Slider";

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
