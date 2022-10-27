import styled from "styled-components";

export const NavbarHeader = styled.div`
  display: flex;
  height: 100vh;
  position: relative;

  .header-left {
    width: 60%;
    height: 100%;
    position: relative;

    .header-main {
      .title {
        margin-top: 17%;
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
          font-size: 22px;
          line-height: 119%;
          color: #2d3142;
          margin-top: 4px;
        }

        .poragriph {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: #2d3142;
          margin-top: 6rem;
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
      padding: 41px 0;
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
      img {
        position: absolute;
        top: 40%;
        right: -40%;
        z-index: 99;
      }
    }
  }

  .header-right {
    width: 40%;
    background: #bee9e8;
    position: relative;

    .doctor-images {
      img {
        width: 100%;
        object-fit: cover;
        position: absolute;
        bottom: 0;
        right: 80px;
        z-index: 99999;
      }
    }
  }

  /* @media (max-width: 1300px) {
    .header-left {
      .header-main {
        .title {
          margin-top: 25%;

          h1 {
            font-size: 100px;
          }
          p {
            font-size: 20px;
          }
        }
      }

      .line {
        display: none;
      }
    }

    .header-right {
      width: 50%;
      .doctor-images {
        img {
          width: 110%;
          right: 5%;
        }
      }
    }
  } */

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
          gap: 15px;

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
`;
