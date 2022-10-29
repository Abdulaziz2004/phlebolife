import {
  Container,
  HeaderDots,
  HeaderDotsTwo,
  MakeDots,
} from "../../global-styled/Global.Styled";
import { NavbarHeader } from "./NavbarMain.styled";
import consul from "../../assets/icon/pasient.svg";
import play from "../../assets/icon/play.svg";
import doctor from "../../assets/images//dactor.png";
import line from "../../assets/images/line.png";

function NavbarMain() {
  return (
    <NavbarHeader>
      <div className="header-left">
        <Container>
          <div className="header-main">
            <div className="title">
              <h1>
                Phlebo<span>life</span>
              </h1>

              <p>
                Специализированная клиника по лечению <br /> хронических
                заболеваний вен и лимфы
              </p>

              <h5 className="poragriph">
                У нас самый современный подход к лечению <br /> варикоза,
                основанный на доказательной медицине!
              </h5>
            </div>

            <div className="item">
              <div className="consul">
                <img src={consul} alt="" />
                <a href="#">Консультация</a>
              </div>
              <div className="video">
                <img src={play} alt="" />
              </div>
            </div>
          </div>
          <HeaderDots dots={28} />
          <HeaderDotsTwo dots={56} />
        </Container>

        <div className="count">
          <Container>
            <div className="count-numbers">
              <div className="number">
                <h3>500+</h3>
                <p>Довольных пациентов</p>
              </div>

              <div className="number">
                <h3>5+</h3>
                <p>Довольных пациентов</p>
              </div>

              <div className="number">
                <h3>10+</h3>
                <p>Довольных пациентов</p>
              </div>
            </div>
          </Container>
        </div>

        <div className="line">
          <img src={line} alt="" />
        </div>
      </div>
      <div className="header-right">
        <div className="doctor-images">
          <img src={doctor} alt="" />
        </div>

        <MakeDots amount={56} />
      </div>
      <img className="doctor-img-none" src={doctor} alt="" />
    </NavbarHeader>
  );
}

export default NavbarMain;
