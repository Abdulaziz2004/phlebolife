import styled from "styled-components";

export const Kasalliklar = styled.div`
  .wrapper {
    padding: 100px 0 0 10%;
    .diseases-grid {
      display: flex;
      width: 100%;
      .diseases-left {
        width: 65%;
        padding: 86px 20px 70px 0;

        .title {
          h2 {
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
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
            margin-top: 3px;
          }

          .next-back {
            display: flex;
            align-items: center;
            justify-content: right;
            gap: 42px;

            .next {
              width: 68px;
              height: 32px;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 24px;
              transition: all 0.2s ease;

              &:hover {
                box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.05);

                span {
                  color: #48cae4;
                }
              }
              span {
                font-size: 24px;
                color: rgba(72, 202, 228, 0.5);
                cursor: pointer;
                transform: rotate(-180deg);
              }
            }

            .back {
              width: 68px;
              height: 32px;
              background: #ffffff;
              box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.05);
              border-radius: 24px;
              display: flex;
              align-items: center;
              justify-content: center;

              span {
                font-size: 24px;
                color: #48cae4;
                cursor: pointer;
              }
            }
          }
        }

        .category {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 32px;
          .categoty-title {
            margin: 52px 0 0 0;
            position: relative;
            h3 {
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 130%;
              color: #0096c7;
            }

            p {
              font-family: "Roboto", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 150%;
              color: #2d3142;
              opacity: 0.75;
              margin-top: 20px;
              margin-bottom: 40px;
            }

            .href-bottom {
              display: flex;
              align-items: center;
              gap: 10px;
              position: absolute;
              bottom: 0;

              a {
                text-decoration: none;
                font-family: "Roboto", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                color: #2d3142;
              }
              span {
                color: #48cae4;
              }
            }
          }
        }
      }

      .diseases-right {
        width: 35%;
        background: #ade8f4;
        position: relative;
        .legs {
          position: absolute;
          top: 40%;
          left: -35%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;
