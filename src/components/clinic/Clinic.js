import {
  Box,
  DotsClinic,
  DotsClinicGreen,
  DotsClinicGreenButton,
} from "../../global-styled/Global.Styled";
import { ClinicStyled } from "./Clinic.styled";
import phone from "../../assets/icon/phone.svg";
import doctor2 from "../../assets/images/doctor2.png";

function Clinic() {
  return (
    <ClinicStyled>
      <Box>
        <div className="element-grid">
          <div className="left-clinic">
            <div className="title">
              <h2>
                О клинике <br /> современной флебологии
              </h2>

              <p>
                Флебологическая клиника <b> Phlebolife </b> - специализируется
                на проведении консультации, диагностики и лечении хронических
                заболеваний вен нижних конечностей по самым современным мировым
                стандартам. <br /> <br /> Врачи-флебологи клиники проходили
                обучение у самых лучших специалистов стран Европы (Германия,
                Латвия, Австрия), России и Южной Кореи. <br /> <br /> Наши
                специалисты первыми в стране начали выполнять Эндовенозные
                Лазерные операции при варикозной болезни вен нижних
                конечностей...
              </p>

              <a href="#">Подробнее &#10132;</a>

              <div className="contact">
                <div>
                  <h3>г. Ташкент</h3>
                  <div className="contact-number">
                    <div>
                      <img src={phone} alt="" />
                    </div>
                    <span>+998 (71) 235-61-00</span>
                  </div>
                </div>

                <div>
                  <h3>г. Самарканд</h3>
                  <div className="contact-number">
                    <div>
                      <img src={phone} alt="" />
                    </div>
                    <span>+998 (71) 235-61-00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-clinic">
            <div className="aqua-div">
              <DotsClinic dots={56} />
            </div>
            <div className="green-div">
              <DotsClinicGreen dots={56} />
              <DotsClinicGreenButton dots={56} />
            </div>
            <div className="doctor-img">
              <img src={doctor2} alt="" />
            </div>
          </div>
        </div>
      </Box>
    </ClinicStyled>
  );
}

export default Clinic;
