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

  @media (max-width: 1000px) {
    .wrapper {
      padding: 100px 0 0 5%;
    }
  }

  @media (max-width: 850px) {
    .wrapper {
      padding: 0;
      .diseases-grid {
        display: block;

        .diseases-left {
          /* padding: 0 5% 0 5%; */

          width: 90%;
          padding: 0;
          margin: 0 auto;
        }

        .diseases-right {
          width: 100%;
          height: 250px;
          margin-top: 80px;
          background: #ade8f4;

          .legs {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img {
              width: 80%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    .wrapper {
      padding: 0;
      .diseases-grid {
        .diseases-right {
          .legs {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img {
              width: 90%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    .wrapper {
      padding: 0;
      .diseases-grid {
        .diseases-right {
          width: 100%;
          height: 200px;
          .legs {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img {
              width: 85%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .wrapper {
      padding: 0;
      .diseases-grid {
        .diseases-right {
          width: 100%;
          height: 190px;
          .legs {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 530px) {
    .wrapper {
      .diseases-grid {
        .diseases-left {
          .title {
            h2 {
              font-size: 35px;
            }
            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 484px) {
    .wrapper {
      .diseases-grid {
        .diseases-left {
          .title {
            h2 {
              font-size: 35px;
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 452px) {
    .wrapper {
      .diseases-grid {
        .diseases-left {
          .title {
            h2 {
              font-size: 32px;
            }
            p {
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 400px) {
    .wrapper {
      padding: 0;
      .diseases-grid {
        .diseases-right {
          width: 100%;
          height: 150px;
          .legs {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
