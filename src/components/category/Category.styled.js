import styled from "styled-components";

export const CategoryWrapper = styled.div`
  .content {
    padding: 198px 0 113px 0;

    .title {
      h2 {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 120%;
        color: #48cae4;
      }

      p {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        text-transform: uppercase;
        color: #2d3142;
        opacity: 0.75;
        margin-top: 10px;
      }
    }

    .category {
      .category-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-top: 44px;

        .category-main {
          h4 {
            font-family: "Mulish", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 140%;
            color: #0096c7;
            margin-top: 19px;
          }

          .line {
            width: 82px;
            height: 1px;
            background-color: #48cae4;
            margin-top: 19px;
          }

          p {
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            color: #000000;
            margin-top: 19px;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    .content {
      padding: 100px 0 100px 0;
      .title {
        h2 {
          font-size: 30px;
        }
      }
      .category {
        .category-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }

  @media (max-width: 530px) {
    .content {
      padding: 100px 0 100px 0;
      .title {
        h2 {
          font-size: 28px;
        }
        p {
          font-size: 14px;
        }
      }
      .category {
        .category-grid {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }

  @media (max-width: 450px) {
    .content {
      .title {
        h2 {
          font-size: 26px;
        }
        p {
          font-size: 14px;
        }
      }
      .category {
        .category-grid {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }

  @media (max-width: 410px) {
    .content {
      .title {
        h2 {
          font-size: 22px;
        }
        p {
          font-size: 14px;
        }
      }
      .category {
        .category-grid {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }
  @media (max-width: 410px) {
    .content {
      .title {
        h2 {
          font-size: 20px;
        }
        p {
          font-size: 14px;
        }
      }
      .category {
        .category-grid {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }
`;
