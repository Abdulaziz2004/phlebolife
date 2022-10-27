import styled from "styled-components";

export const Navigation = styled.header`
  .sticky {
    background: #bee2e8;
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
      transition: all 0.4s ease;

      .nav-logo {
        img {
          width: 223px;
          height: 51px;
        }
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 20px;

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
`;
