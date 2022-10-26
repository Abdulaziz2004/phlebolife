import { Box, Container } from "../../global-styled/Global.Styled";
import { Kasalliklar } from "./DiseAses.styled";
import legs from "../../assets/images/legs.png";
import MultipleRows from "./Corusel";

function DiseAses() {
  return (
    <Kasalliklar>
      {/* <Box> */}
      <div className="wrapper">
        <div className="diseases-grid">
          <div className="diseases-left">
            <div className="title">
              <h2>Заболевания</h2>
              <p>
                ХРОНИЧЕСКИЕ ЗАБОЛЕВАНИЯ ВЕН НИЖНИХ КОНЕЧНОСТЕЙ, <br /> МАЛОГО
                ТАЗА И ЛИМФАТИЧЕСКИХ СОСУДОВ
              </p>
            </div>

            <MultipleRows />
          </div>
          <div className="diseases-right">
            <div className="legs">
              <img src={legs} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* </Box> */}
    </Kasalliklar>
  );
}

export default DiseAses;
