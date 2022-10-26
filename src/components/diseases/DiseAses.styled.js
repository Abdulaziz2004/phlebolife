import styled from "styled-components";

export const Kasalliklar = styled.div`
  .wrapper {
    padding: 100px 0 0 10%;
    /* background-color: #f2f2f2; */
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
