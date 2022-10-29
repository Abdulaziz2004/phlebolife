import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import line from "../../assets/icon/kartochka-line.svg";

export default class UnevenSetsFinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 600,
      slidesToScroll: 6,
      slidesToShow: 3.5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },

        {
          breakpoint: 1012,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },

        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <Wrapper>
        <Slider {...settings}>
          <div className="content">
            <div className="item">
              <div className="circle">
                <h4>01</h4>
              </div>
              <h3>
                - Эндовенозная <br /> лазерная облитерация
              </h3>
              <div className="line"></div>
              <p>
                Эндовенозная лазерная тепловая абляция — современный лечебный
                метод, использующийся при варикозной болезни, хронической
                венозной недостаточности.
              </p>
              <div className="top-line"></div>
              <img src={line} alt="" />
            </div>
          </div>

          <div className="content">
            <div className="item">
              <div className="circle">
                <h4>02</h4>
              </div>
              <h3>
                - Эндовенозная <br /> лазерная облитерация
              </h3>
              <div className="line"></div>
              <p>
                Эндовенозная лазерная тепловая абляция — современный лечебный
                метод, использующийся при варикозной болезни, хронической
                венозной недостаточности.
              </p>
              <div className="top-line"></div>
              <img src={line} alt="" />
            </div>
          </div>

          <div className="content">
            <div className="item">
              <div className="circle">
                <h4>03</h4>
              </div>
              <h3>
                - Эндовенозная <br /> лазерная облитерация
              </h3>
              <div className="line"></div>
              <p>
                Эндовенозная лазерная тепловая абляция — современный лечебный
                метод, использующийся при варикозной болезни, хронической
                венозной недостаточности.
              </p>
              <div className="top-line"></div>
              <img src={line} alt="" />
            </div>
          </div>

          <div className="content">
            <div className="item">
              <div className="circle">
                <h4>04</h4>
              </div>
              <h3>
                - Эндовенозная <br /> лазерная облитерация
              </h3>
              <div className="line"></div>
              <img src={line} alt="" />
              <p>
                Эндовенозная лазерная тепловая абляция — современный лечебный
                метод, использующийся при варикозной болезни, хронической
                венозной недостаточности.
              </p>
              <div className="top-line"></div>
            </div>
          </div>

          <div className="content">
            <div className="item">
              <div className="circle">
                <h4>05</h4>
              </div>
              <h3>
                - Эндовенозная <br /> лазерная облитерация
              </h3>
              <div className="line"></div>
              <p>
                Эндовенозная лазерная тепловая абляция — современный лечебный
                метод, использующийся при варикозной болезни, хронической
                венозной недостаточности.
              </p>
              <div className="top-line"></div>
              <img src={line} alt="" />
            </div>
          </div>

          <div className="content">
            <div className="item">
              <div className="circle">
                <h4>06</h4>
              </div>
              <h3>
                - Эндовенозная <br /> лазерная облитерация
              </h3>
              <div className="line"></div>
              <p>
                Эндовенозная лазерная тепловая абляция — современный лечебный
                метод, использующийся при варикозной болезни, хронической
                венозной недостаточности.
              </p>
              <div className="top-line"></div>
              <img src={line} alt="" />
            </div>
          </div>
        </Slider>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 5px 0 105px;
  /* margin-top: -35%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .content {
    .item {
      position: relative;
      width: 320px;
      height: 100%;
      margin-left: auto;
      padding: 30px 15px 25px 15px;
      border-radius: 24px;
      border: 1px solid #bee9e8;

      background: #ffffff;
      /* box-shadow: 0px 4px 9px 2px rgba(34, 60, 80, 0.16); */
      box-shadow: -1px 0px 9px -3px rgba(56, 147, 217, 0.16);

      .circle {
        width: 94px;
        height: 69px;
        background: #48cae4;
        border-radius: 200px;
        display: flex;
        align-items: center;
        justify-content: center;

        h4 {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 43.3333px;
          line-height: 145%;
          color: #ffffff;
        }
      }

      h3 {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 140%;
        color: #0096c7;
        margin-top: 17px;
      }

      .line {
        width: 50px;
        height: 2px;
        background: #bee9e8;
        margin-top: 17px;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 145%;
        margin-top: 17px;
        color: #2d3142;
        opacity: 0.75;
      }

      .top-line {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 214px;
        height: 10px;
        background: #48cae4;
        border-radius: 0px 0px 15px 15px;
      }

      img {
        position: absolute;
        top: 0;
        right: 50%;
      }
    }
  }

  @media (max-width: 1235px) {
    padding: 0 5% 0 5%;

    .content {
      .item {
        width: 90%;
      }
    }
  }

  @media (max-width: 1080px) {
    .content {
      .item {
        width: 300px;
      }
    }
  }

  @media (max-width: 1012px) {
    .content {
      .item {
        width: 90%;

        img {
          display: none;
        }
      }
    }
  }

  @media (max-width: 660px) {
    .content {
      .item {
        width: 100%;
      }
    }
  }
`;
