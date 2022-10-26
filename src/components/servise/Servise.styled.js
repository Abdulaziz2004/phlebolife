import styled from "styled-components";

export const ServiseWrapper = styled.div`
  .Wrapper {
    display: flex;
    width: 100%;
    .servise-left {
      width: 40%;
      height: 700px;
      background: #bee9e8;
      position: relative;

      .circle-center {
        width: 306px;
        height: 331px;
        background: #ffffff;
        border-radius: 24px;
        position: absolute;
        top: 32%;
        left: 16%;
      }
    }

    .servise-right {
      width: 60%;
      position: relative;

      .title {
        margin: 56px 50px 0 0;
        h3 {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 110%;
          text-align: right;
          color: #48cae4;
        }

        p {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 160%;
          margin-top: 2px;

          text-align: right;
          text-transform: uppercase;
          color: #2d3142;
          opacity: 0.75;
        }
      }

      .line {
        img {
          position: absolute;
          top: 27%;
        }
      }
    }
  }

  .corusel {
    display: block;
    .slick-slider {
      .slick-arrow {
        display: none !important;
      }

      .slick-dots li button:before {
        font-size: 16px;
        color: aqua;

        margin-top: 40px;
      }
    }
  }
`;
