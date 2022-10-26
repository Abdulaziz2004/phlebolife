import { Box, Container } from "../../global-styled/Global.Styled";
import { Kasalliklar } from "./DiseAses.styled";
import legs from "../../assets/images/legs.png";

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

                <div className="next-back">
                  <div className="next">
                    <span>&#10142;</span>
                  </div>
                  <div className="back">
                    <span>&#10142;</span>
                  </div>
                </div>
              </div>

              <div className="category">
                <div className="categoty-title">
                  <h3>
                    Варикозная болезнь <br /> нижних конечностей
                  </h3>
                  <p>
                    Варикозная болезнь нижних конечностей или <br /> варикозное
                    расширение вен нижних <br /> конечностей – расширение...
                  </p>

                  <div className="href-bottom">
                    <a href="#">Подробнее</a>
                    <span>&#10132;</span>
                  </div>
                </div>

                <div className="categoty-title">
                  <h3>Сосудистые звездочки</h3>
                  <p>
                    Варикозная болезнь нижних конечностей или <br /> варикозное
                    расширение вен нижних <br /> конечностей – расширение...
                  </p>
                  <div className="href-bottom">
                    <a href="#">Подробнее</a>
                    <span>&#10132;</span>
                  </div>
                </div>

                <div className="categoty-title">
                  <h3>
                    Варикозная болезнь <br /> нижних конечностей
                  </h3>
                  <p>
                    Варикозная болезнь нижних конечностей или <br /> варикозное
                    расширение вен нижних <br /> конечностей – расширение...
                  </p>

                  <div className="href-bottom">
                    <a href="#">Подробнее</a>
                    <span>&#10132;</span>
                  </div>
                </div>

                <div className="categoty-title">
                  <h3>Сосудистые звездочки</h3>
                  <p>
                    Варикозная болезнь нижних конечностей или <br /> варикозное
                    расширение вен нижних <br /> конечностей – расширение...
                  </p>

                  <div className="href-bottom">
                    <a href="#">Подробнее</a>
                    <span>&#10132;</span>
                  </div>
                </div>
              </div>
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
