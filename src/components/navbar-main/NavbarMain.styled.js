import styled from "styled-components";

export const NavbarHeader = styled.div`
  display: flex;
  height: 900px;
  position: relative;

  .doctor-img-none {
    display: none;
  }

  .header-left {
    width: 60%;
    position: relative;

    .header-main {
      .title {
        margin-top: 210px;
        h1 {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 120px;
          line-height: 110%;
          color: #2d3142;

          span {
            color: #0096c7;
          }
        }

        p {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 119%;
          color: #2d3142;
          margin-top: 4px;
          margin-left: 10px;
        }

        .poragriph {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: #2d3142;
          margin-top: 97px;
        }
      }

      .item {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-top: 45px;
        .consul {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border: 2px solid #48cae4;
          border-radius: 12px;
          a {
            text-decoration: none;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #48cae4;
          }
        }

        .video {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid #bee9e8;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            cursor: pointer;
          }
        }
      }
    }

    .count {
      width: 110%;
      padding: 31px 0;
      background: #ffffff;
      position: absolute;
      bottom: -61px;
      z-index: 999999;

      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      border-radius: 0 24px 24px 0;

      .count-numbers {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .number {
          h3 {
            font-family: "Montserrat", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 58px;
            line-height: 80px;
            text-align: center;
            letter-spacing: 0.2px;
            color: #48cae4;
          }

          p {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            text-align: center;
            color: #2d3142;
          }
        }
      }
    }

    .line {
      .line {
        position: absolute;
        width: 80%;
        top: 45%;
        right: -40%;
        z-index: 99;
      }

      .leaf {
        .leaf-bottom {
          position: absolute;
          top: 52%;
          left: 76%;
          z-index: 99;
        }

        .leaf-top {
          position: absolute;
          top: 50.1%;
          left: 79%;
          z-index: 99;
        }
      }
    }
  }

  .header-right {
    width: 40%;
    background: #bee9e8;
    position: relative;

    .doctor-images {
      img {
        object-fit: cover;
        position: absolute;
        bottom: 0;
        right: 20px;
        z-index: 99999;
      }
    }
  }

  @media (max-width: 1200px) {
    .header-left {
      .count {
        padding: 21px 0;

        .count-numbers {
          .number {
            h3 {
              font-size: 55px;
            }

            p {
              font-size: 15px;
            }
          }
        }
      }

      .line {
        display: none;
      }
    }
  }

  @media (max-width: 1130px) {
    .header-left {
      .header-main {
        .title {
          margin-top: 30%;

          h1 {
            font-size: 100px;
          }
          p {
            font-size: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .header-left {
      .header-main {
        .title {
          margin-top: 35%;

          h1 {
            font-size: 90px;
          }
          p {
            font-size: 19px;
          }

          .poragriph {
            font-size: 15px;
          }
        }
      }

      .count {
        .count-numbers {
          gap: 10px;

          .number {
            h3 {
              font-size: 50px;
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1060px) {
    .header-left {
      .count {
        .count-numbers {
          gap: 15px;

          .number {
            h3 {
              font-size: 48px;
            }
            p {
              font-size: 13px;
            }
          }
        }
      }
    }
    .header-right {
      .doctor-images {
        img {
          width: 120%;
        }
      }
    }
  }

  @media (max-width: 1020px) {
    .header-left {
      .header-main {
        .title {
          margin-top: 40%;
          h1 {
            font-size: 85px;
            font-weight: 600;
          }
          p {
            font-size: 18px;
          }
          .poragriph {
            font-size: 14px;
          }
        }
      }
      .count {
        .count-numbers {
          gap: 15px;

          .number {
            h3 {
              font-size: 48px;
            }
            p {
              font-size: 13px;
            }
          }
        }
      }
    }
    .header-right {
      .doctor-images {
        img {
          width: 130%;
          right: 2%;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .header-left {
      width: 100%;
      background: #bee9e8;

      .header-main {
        .title {
          margin-top: 20%;

          h1 {
            /* color: #fff; */
            font-size: 100px;
          }
          p {
            /* color: #fff; */
            opacity: 0.7;
          }
          .poragriph {
            margin: 40px 0 0 0;
          }
        }
      }

      .count {
        width: 100%;
        border-radius: 0;
      }
    }
    .header-right {
      display: none;
      width: 0;
      height: 100%;
      .doctor-images {
        img {
          width: 100%;
          display: none;
        }
      }
    }
  }

  @media (max-width: 630px) {
    .header-left {
      .header-main {
        .title {
          h1 {
            font-size: 80px;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    height: 80vh;
    .header-left {
      .header-main {
        .title {
          h1 {
            font-size: 50px;
          }
          p {
            font-size: 12px;
          }

          .poragriph {
            font-size: 10px;
          }
        }
      }
    }

    .doctor-img-none {
      display: block;
      position: absolute;
      width: 60%;
      right: 10px;
      bottom: 0;
    }
    .header-right {
      .doctor-images {
      }
    }
  }
  @media (max-width: 520px) {
    .header-left {
      .header-main {
        .title {
          margin-top: 25%;

          .poragriph {
            font-size: 12px;
          }
        }
      }

      .count {
        padding: 0 0 10px 0;
        .count-numbers {
          gap: 10px;
          .number {
            h3 {
              font-size: 35px;
            }

            p {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 475px) {
    .header-left {
      .header-main {
        .title {
          margin-top: 25%;

          .poragriph {
            font-size: 12px;
          }
        }

        .item {
          .consul {
            padding: 10px 12px;
          }
        }
      }

      .count {
        padding: 0 0 10px 0;
        .count-numbers {
          gap: 10px;
          .number {
            h3 {
              font-size: 30px;
              margin: 0;
            }

            p {
              font-size: 11px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .header-left {
      .header-main {
        .title {
          margin-top: 30%;

          h1 {
            font-size: 48px;
          }

          .poragriph {
            font-size: 12px;
            margin: 20px 0 0 0;
          }
        }

        .item {
          .consul {
            padding: 10px 12px;
            gap: 5px;

            a {
              font-size: 15px;
            }
            img {
              width: 20px;
            }
          }
        }
      }

      .count {
        padding: 0 0 10px 0;
        .count-numbers {
          gap: 10px;
          .number {
            h3 {
              font-size: 30px;
              margin: 0;
            }

            p {
              font-size: 11px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 437px) {
    .header-left {
      .count {
        /* padding: -30px 0; */

        .count-numbers {
          .number {
            h3 {
              font-weight: 600;
            }
            p {
              font-size: 10px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 437px) {
    .header-left {
      .count {
        /* padding: -30px 0; */

        .count-numbers {
          .number {
            h3 {
              height: 60px;
              font-weight: 600;
            }
            p {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`;
