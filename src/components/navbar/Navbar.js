import { Container } from "../../global-styled/Global.Styled";
import { Navigation } from "./Navbar.styled";
import navLogo from "../../assets/icon/nav-logo.svg";
import glob from "../../assets/icon/globe.svg";

function Navbar() {
  return (
    <Navigation>
      <div className="wrapper-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={navLogo} alt="" />
          </div>

          <div className="nav-links">
            <a href="#">О клинике</a>
            <a href="#">Заболевания</a>
            <a href="#">Методы лечения</a>
            <a href="#">Наши специалисты</a>
            <a href="#">Цены</a>
            <a href="#">Контакты</a>
          </div>

          <div className="dropdovn">
            <div className="dropdown-glob">
              <img src={glob} alt="" />
            </div>
            <select>
              <option>Русский</option>
              <option>Узбек</option>
            </select>
          </div>
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;
