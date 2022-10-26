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
`;
