import styled from "styled-components";

export const Navigation = styled.header`
  .sticky {
    background: #bee2e8;
  }

  .active {
    width: 100%;
    height: 100vh;
    background: #bee9e8;
    position: absolute;
    top: 0;
    /* left: 0; */

    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;

    a {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #000000;
      text-decoration: none;
      transition: all 0.2s ease;
      text-align: center;

      &:nth-child(1) {
        color: #0096c7;
        font-weight: 700;
      }

      &:hover {
        color: #0096c7;
        font-weight: 700;
      }
    }
  }

  .wrapper-nav {
    /* padding: 0 30px 0 0; */
    position: fixed;
    right: 0;
    left: 0;
    z-index: 9999999;

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 19px 40px 10px 0;

      .nav-logo {
        z-index: 99;
        img {
          width: 223px;
          height: 51px;
        }
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 20px;
        transition: all 0.2s ease;

        a {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #000000;
          text-decoration: none;
          transition: all 0.2s ease;

          &:nth-child(1) {
            color: #0096c7;
            font-weight: 700;
          }

          &:hover {
            color: #0096c7;
            font-weight: 700;
          }
        }
      }

      .dropdovn {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: right;
        z-index: 99;

        select {
          border: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          color: #2d3142;
        }
      }

      .hammurger-menu {
        display: none;
        z-index: 999;
      }

      /* .actice {
        height: 100vh;
        width: 100%;
        background-color: red;
      } */
    }
  }

  @media (max-width: 1060px) {
    .wrapper-nav {
      .nav-container {
        .nav-links {
          a {
            font-size: 15px;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .wrapper-nav {
      .nav-container {
        .nav-links {
          position: fixed;
          top: 0;
          right: -200%;
        }
        .dropdovn {
          margin-left: auto;
        }

        .hammurger-menu {
          display: block;
          margin: 0 0 0 30px;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 410px) {
    .wrapper-nav {
      .nav-container {
        .hammurger-menu {
          display: block;
          margin: 0 0 0 30px;
          cursor: pointer;
        }

        .nav-logo {
          padding: 0 0 0 20px;
          img {
            width: 150px;
          }
        }

        .dropdovn {
          gap: 2px;
          .dropdown-glob {
            img {
              width: 18px;
            }
          }

          select {
            font-size: 15px;
          }
        }
      }
    }
  }
`;
