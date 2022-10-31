import { Container } from "../../global-styled/Global.Styled";
import { Navigation } from "./Navbar.styled";
import navLogo from "../../assets/icon/nav-logo.svg";
import glob from "../../assets/icon/globe.svg";
import hammuerger from "../../assets/icon/hammuerger2.svg";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbarScroll = document.querySelector(".nav-container");

      if (window.scrollY == 0) {
        navbarScroll.classList.remove("sticky");
      } else if (window.scrollY > 10) {
        navbarScroll.classList.add("sticky");
      }
    });
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Navigation>
      <div className={click ? "wrapper-nav activ" : "wrapper-nav"}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={navLogo} alt="" />
          </div>

          <div className={click ? " active" : "nav-links"}>
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
          <div onClick={handleClick} className="hammurger-menu">
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

// import { useEffect, useState } from "react";
// import Fade from "react-reveal/Fade";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import navLogo from "../../assets/icon/nav-logo.svg";
// import glob from "../../assets/icon/globe.svg";

// export const Navbar = () => {
//   useEffect(() => {
//     window.addEventListener("scroll", function () {
//       const navbarScroll = document.querySelector(".header");

//       if (window.scrollY == 0) {
//         navbarScroll.classList.remove("sticky");
//       } else if (window.scrollY > 10) {
//         navbarScroll.classList.add("sticky");
//       }
//     });
//   }, []);

//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//       <Fade top cascade>
//         <Header className="header">
//           <Logo to="/">
//             <img className="nav-logo" src={navLogo} alt="" />
//           </Logo>

//           <div className={click ? "nav-menu active" : "nav-menu"}>
//             <NavLink to="/" onClick={handleClick}>
//               О клинике
//             </NavLink>
//             <NavLink to="/portfolio" onClick={handleClick}>
//               Заболевания
//             </NavLink>
//             <NavLink to="/about-me" onClick={handleClick}>
//               Методы лечения
//             </NavLink>
//             <NavLink to="/FAQs" onClick={handleClick}>
//               Наши специалисты
//             </NavLink>
//             <NavLink to="/FAQs" onClick={handleClick}>
//               Цены
//             </NavLink>
//             <NavLink to="/FAQs" onClick={handleClick}>
//               Контакты
//             </NavLink>
//           </div>

//           <div className="link-drop">
//             <div class="links">
//               <div className="glob">
//                 <img src={glob} alt="" />
//               </div>
//               <div class="right-menu">
//                 <button class="menu-button">Русский</button>
//                 <div class="dropdown-menu">
//                   <a href="#">Узбек</a>
//                 </div>
//               </div>
//             </div>

//             <div onClick={handleClick} className="nav">
//               <div className="navigaite"></div>
//               <div className="navigaite"></div>
//               <div className="navigaite"></div>
//             </div>
//           </div>
//         </Header>
//       </Fade>
//     </>
//   );
// };
// const Header = styled.div`
//   width: 100%;
//   padding: 20px 50px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: fixed;
//   transition: 0.6s;
//   top: 0;
//   left: 0;
//   z-index: 999999999;

//   .sticky {
//     background: red;
//   }

//   .link-drop {
//     display: flex;
//     align-items: center;
//     gap: 20px;
//   }
//   .links {
//     display: flex;
//     align-items: center;
//     gap: 16px;

//     .right-menu {
//       .menu-button {
//         background-color: transparent;
//         border: none;
//         outline: none;
//         cursor: pointer;
//         font-family: "Roboto";
//         font-style: normal;
//         font-weight: 700;
//         font-size: 16px;
//         line-height: 150%;
//         color: #2d3142;
//         font-size: 16px;
//       }

//       .dropdown-menu {
//         display: none;
//         position: absolute;

//         .dropdown-menu a {
//           color: #000;
//           padding: 12px 16px;
//           text-decoration: none;
//           display: block;
//           text-decoration: none;
//           transition: all 0.5s ease;
//           font-family: "Roboto";
//           font-style: normal;
//           font-weight: 700;
//           font-size: 16px;
//           line-height: 150%;
//           color: #2d3142;
//         }
//       }

//       &:hover .dropdown-menu {
//         display: block;
//       }
//     }
//   }

//   .nav-logo {
//     width: 223px;
//     height: 51px;
//   }

//   .nav {
//     width: 40px;
//     height: 100%;
//     display: none;
//     cursor: pointer;

//     @media (max-width: 1110px) {
//       display: block;
//     }

//     .navigaite {
//       width: 100%;
//       height: 5px;
//       background-color: white;
//       border-radius: 8px;
//       margin: 5px 0;
//     }
//   }

//   @media (max-width: 1110px) {
//     .nav-menu {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       width: 100%;
//       position: absolute;
//       left: -100%;
//       top: 51px;
//     }

//     .active {
//       border-top: 1px solid grey;
//       background-color: aqua;
//       left: 0;
//       transition: all 0.5s ease;
//       height: 100vh;
//       padding: 250px 100px;
//     }
//   }

//   @media (max-width: 1110px) {
//     padding: 12px;
//   }

//   .menu-btn {
//     display: none;
//     @media (max-width: 1110px) {
//       display: block;
//       position: absolute;
//       right: 12px;
//     }
//   }
// `;

// const Logo = styled(Link)`
//   b {
//     font-size: 30px;
//     font-weight: bold;
//     color: #ffffff;

//     @media (max-width: 1110px) {
//       font-size: 20px;
//     }
//   }
// `;

// const NavLink = styled(Link)`
//   margin-left: 20px;
//   font-family: "Roboto", sans-serif;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 150%;
//   color: #000000;
//   text-decoration: none;
//   transition: all 0.2s ease;

//   &:nth-child(1) {
//     color: #0096c7;
//     font-weight: 700;
//   }

//   &:hover {
//     color: #0096c7;
//     font-weight: 700;
//   }
//   transition: 0.3s ease;

//   &:hover {
//     color: #0096c7;
//     font-weight: 700;
//   }

//   @media (max-width: 1110px) {
//     text-align: center;
//     margin: auto;
//     font-size: 30px;
//   }
// `;
