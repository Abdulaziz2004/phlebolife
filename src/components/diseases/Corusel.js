import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
    };
    return (
      <Wrapper>
        <Slider {...settings}>
          <div className="title">
            <h4>
              Варикозная болезнь <br />
              нижних конечностей
            </h4>
            <p>
              Варикозная болезнь нижних конечностей или <br /> варикозное
              расширение вен нижних <br /> конечностей – расширение...
            </p>
            <a href="#">
              Подробнее <span>&#10132;</span>
            </a>
          </div>

          <div className="title">
            <h4>
              Варикозная болезнь <br />
              нижних конечностей
            </h4>
            <p>
              Варикозная болезнь нижних конечностей или <br /> варикозное
              расширение вен нижних <br /> конечностей – расширение...
            </p>
            <a href="#">
              Подробнее <span>&#10132;</span>
            </a>
          </div>
          <div className="title">
            <h4>
              Варикозная болезнь <br />
              нижних конечностей
            </h4>
            <p>
              Варикозная болезнь нижних конечностей или <br /> варикозное
              расширение вен нижних <br /> конечностей – расширение...
            </p>
            <a href="#">
              Подробнее <span>&#10132;</span>
            </a>
          </div>
          <div className="title">
            <h4>
              Варикозная болезнь <br />
              нижних конечностей
            </h4>
            <p>
              Варикозная болезнь нижних конечностей или <br /> варикозное
              расширение вен нижних <br /> конечностей – расширение...
            </p>
            <a href="#">
              Подробнее <span>&#10132;</span>
            </a>
          </div>
          <div className="title">
            <h4>
              Варикозная болезнь <br />
              нижних конечностей
            </h4>
            <p>
              Варикозная болезнь нижних конечностей или <br /> варикозное
              расширение вен нижних <br /> конечностей – расширение...
            </p>
            <a href="#">
              Подробнее <span>&#10132;</span>
            </a>
          </div>
          <div className="title">
            <h4>
              Варикозная болезнь <br />
              нижних конечностей
            </h4>
            <p>
              Варикозная болезнь нижних конечностей или <br /> варикозное
              расширение вен нижних <br /> конечностей – расширение...
            </p>
            <a href="#">
              Подробнее <span>&#10132;</span>
            </a>
          </div>
        </Slider>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 95%;
  position: relative;
  .slick-slider {
    .slick-prev {
      position: absolute;
      top: 0;
      left: 95%;
    }

    .slick-arrow {
      position: absolute;
      top: 0;
    }

    .slick-arrow:before {
      font-size: 30px;
      color: #48CAE4;
    }
  }

  .title {
    margin-top: 50px;
    h4 {
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
      font-size: 14px !important;
      line-height: 150%;
      color: #2d3142;
      opacity: 0.75;
      margin-top: 20px !important;
      margin-bottom: 40px;
    }

    a {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: #2d3142;
      text-decoration: none;

      span {
        color: #48cae4;
      }
    }
  }
`;
