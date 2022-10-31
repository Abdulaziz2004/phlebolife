import styled from "styled-components";

export const ClinicStyled = styled.div`
  padding: 185px 0 0 0;
  .element-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    .left-clinic {
      .title {
        h2 {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 110%;
          color: #48cae4;
        }

        p {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: #2d3142;
          margin-top: 25px;
          margin-bottom: 45px;
        }

        a {
          text-decoration: none;
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
          color: #2d3142;

          &:hover {
            text-decoration: underline;
          }
        }

        .contact {
          display: flex;
          align-items: center;
          gap: 50px;
          margin-top: 58px;

          h3 {
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 150%;
            color: #48cae4;
          }

          .contact-number {
            img {
              width: 20px;
              height: 20px;
            }
            display: flex;
            align-items: center;
            gap: 11px;
            margin-top: 10px;

            span {
              font-family: "Roboto", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 160%;
              color: #000000;
              opacity: 0.6;
            }
          }
        }
      }
    }

    .right-clinic {
      position: relative;

      .aqua-div {
        position: absolute;
        top: 0;
        left: 0;
        width: 90%;
        height: 80%;
        background: #ade8f4;
        border-radius: 24px;
      }

      .green-div {
        position: absolute;
        left: 50px;
        top: 60px;
        width: 90%;
        height: 80%;
        background: #bee9e8;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 24px;
      }

      .doctor-img {
        position: absolute;
        top: -20px;
        left: 15%;
        bottom: 0;
        img {
          width: 94.7%;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .element-grid {
      .left-clinic {
        .title {
          h2 {
            font-size: 34px;
          }
          p {
            font-size: 15px;
          }
        }
      }
    }
  }

  @media (max-width: 1160px) {
    .element-grid {
      .left-clinic {
        .title {
          h2 {
            font-size: 30px;
          }
          p {
            font-size: 14px;
            margin-bottom: 35px;
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .element-grid {
      .right-clinic {
        .doctor-img {
          top: 10px;
        }
      }
    }
  }

  @media (max-width: 1050px) {
    .element-grid {
      .right-clinic {
        .doctor-img {
          top: 50px;
        }
      }
    }
  }

  @media (max-width: 1030px) {
    .element-grid {
      .left-clinic {
        .title {
          h2 {
            font-size: 28px;
          }
        }
      }
      .right-clinic {
        .aqua-div {
          height: 70%;
        }
        .green-div {
          height: 70%;
        }

        .doctor-img {
          top: 0;
        }
      }
    }
  }

  @media (max-width: 1040px) {
    .element-grid {
      .left-clinic {
        .title {
          .contact {
            margin-top: 40px;
            .contact-number {
              span {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .element-grid {
      .left-clinic {
        .title {
          .contact {
            gap: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 850px) {
    padding: 120px 0 0 0;
    .element-grid {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      margin-bottom: 100px;

      .left-clinic {
        .title {
          h2 {
            font-size: 40px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      .right-clinic {
        /* bottom: 0; */
        width: 100%;
        height: 500px;
        background-color: white;
        margin-left: auto;
        margin-top: 80px;

        .aqua-div {
          width: 100%;
          height: 100%;
        }

        .green-div {
          width: 100%;
          height: 90%;
          left: 0;
        }
        .doctor-img {
          position: absolute;
          top: -60px;
          left: 20%;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 601px) {
    .element-grid {
      margin-bottom: 0;
      .right-clinic {
        .doctor-img {
          left: 10%;
          top: -95px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 601px) {
    .element-grid {
      margin-bottom: 100px;
    }
  }

  @media (max-width: 580px) {
    .element-grid {
      .left-clinic {
        .title {
          h2 {
            font-size: 35px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      .right-clinic {
        .doctor-img {
          top: -95px;
          left: 5%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 510px) {
    .element-grid {
      margin-bottom: 0;
      .left-clinic {
        .title {
          h2 {
            font-size: 32px;
          }

          p {
            font-size: 15px !important;
          }
        }
      }

      .right-clinic {
        margin-bottom: 0;
        height: 600px;
      }

      .right-clinic {
        .aqua-div {
          height: 80%;
        }
        .green-div {
          height: 80%;
        }
        .doctor-img {
          top: -68px;
          left: 2%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 460px) {
    .element-grid {
      .left-clinic {
        .title {
          h2 {
            font-size: 30px;
          }

          p {
            font-size: 15px !important;
          }
        }
      }
      .right-clinic {
        .aqua-div {
          height: 70%;
        }
        .green-div {
          height: 70%;
        }
        .doctor-img {
          top: -105px;
          left: 0%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 440px) {
    padding: 120px 0 130px 0;
    .element-grid {
      .left-clinic {
        .title {
          h2 {
            font-size: 28px;
          }

          p {
            font-size: 15px !important;
          }
        }
      }
      .right-clinic {
        height: 400px;
        .aqua-div {
          height: 100%;
        }
        .green-div {
          height: 100%;

          position: relative;
        }
        .doctor-img {
          position: absolute;
          top: 0px;
          left: 10%;
          img {
            width: 90%;
          }
        }
      }
    }
  }

  @media (max-width: 414px) {
    .element-grid {
      .right-clinic {
        .aqua-div {
          height: 100%;
        }
        .green-div {
          height: 100%;
          position: relative;
        }
        .doctor-img {
          position: absolute;
          top: 10px;
          left: 6%;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 390px) {
    .element-grid {
      .left-clinic {
        .title {
          .contact {
            .contact-number {
              span {
                font-size: 12px;
              }
            }
          }
        }
      }
      .right-clinic {
        .aqua-div {
          height: 90%;
        }
        .green-div {
          height: 90%;
          position: relative;
        }
        .doctor-img {
          position: absolute;
          top: -12px;
          left: 5%;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 376px) {
    .element-grid {
      .left-clinic {
        .title {
          h2 {
            font-size: 20px;
          }
          font-size: 14px;
          .contact {
            .contact-number {
              span {
                font-size: 12px;
              }
            }
          }
        }
      }
      .right-clinic {
        .doctor-img {
          position: absolute;
          top: -2px;
          left: 3%;
          img {
            max-width: 90%;
          }
        }
      }
    }
  }

  @media (max-width: 360px) {
    .element-grid {
      .right-clinic {
        .doctor-img {
          position: absolute;
          top: 0px;
          left: 0%;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 350px) {
    .element-grid {
      .right-clinic {
        .doctor-img {
          position: absolute;
          top: 20px;
          left: 5px;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 340px) {
    .element-grid {
      .right-clinic {
        .doctor-img {
          position: absolute;
          top: 30px;
          left: 5px;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 330px) {
    .element-grid {
      .right-clinic {
        .doctor-img {
          position: absolute;
          top: 40px;
          left: 5px;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
`;
