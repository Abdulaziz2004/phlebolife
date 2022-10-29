import styled, { createGlobalStyle } from "styled-components";

export const GLobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Container = styled.div`
  max-width: 75%;
  margin: 0 auto;

  @media (max-width: 630px) {
    max-width: 85%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Box = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const MakeDots = ({ amount }) => {
  let pieces = Array(amount).fill(null);

  return (
    <Wrapper>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </Wrapper>
  );
};

export const HeaderDots = ({ dots }) => {
  let pieces = Array(dots).fill(null);

  return (
    <WrapperDots>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </WrapperDots>
  );
};

export const HeaderDotsTwo = ({ dots }) => {
  let pieces = Array(dots).fill(null);

  return (
    <WrapperDotsTwo>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </WrapperDotsTwo>
  );
};

export const DotsClinic = ({ dots }) => {
  let pieces = Array(dots).fill(null);

  return (
    <ClinicDots>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </ClinicDots>
  );
};

export const DotsClinicGreen = ({ dots }) => {
  let pieces = Array(dots).fill(null);

  return (
    <ClinicDotsGreen>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </ClinicDotsGreen>
  );
};

export const DotsClinicGreenButton = ({ dots }) => {
  let pieces = Array(dots).fill(null);

  return (
    <ClinicDotsGreenButton>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </ClinicDotsGreenButton>
  );
};

export const DotsServices = ({ dots }) => {
  let pieces = Array(dots).fill(null);

  return (
    <DotsServicesWrapper>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </DotsServicesWrapper>
  );
};

export const DotsServicesBottomBox = ({ dots }) => {
  let pieces = Array(dots).fill(null);

  return (
    <DotsServicesBottom>
      {pieces.map((span, index) => (
        <span key={index}></span>
      ))}
    </DotsServicesBottom>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 40%;
  left: 55%;
  width: 160px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 1300px) {
    top: 40%;
    left: 60%;
  }

  @media (max-width: 1200px) {
    top: 45%;
  }
`;

const WrapperDots = styled.div`
  position: absolute;
  z-index: 999;
  top: 17%;
  left: -0.3%;
  width: 80px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #ade8f4;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1300px) {
    top: 17%;
  }

  @media (max-width: 1180px) {
    top: 15%;
    left: -3%;
  }
  @media (max-width: 1130px) {
    top: 18%;
  }
  @media (max-width: 1100px) {
    top: 20%;
  }

  @media (max-width: 630px) {
    left: -6%;
    top: 25%;
  }
  @media (max-width: 630px) {
    display: none;
  }
`;
const WrapperDotsTwo = styled.div`
  position: absolute;
  top: 58%;
  right: 0;
  width: 150px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #ade8f4;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1300px) {
    /* top: 50%; */
  }
`;

const ClinicDots = styled.div`
  position: absolute;
  top: 36px;
  left: 17px;
  width: 140px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const ClinicDotsGreen = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 140px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const ClinicDotsGreenButton = styled.div`
  position: absolute;
  left: 15px;
  bottom: 30px;
  width: 140px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const DotsServicesWrapper = styled.div`
  position: absolute;
  right: -40px;
  top: 28%;
  width: 130px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 4px;
    height: 4px;
    background: #48cae4;
    border-radius: 50%;
  }
`;

const DotsServicesBottom = styled.div`
  position: absolute;
  bottom: 25%;
  right: 40px;
  width: 130px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  span {
    display: block;
    width: 4px;
    height: 4px;
    background: #48cae4;
    border-radius: 50%;
  }
`;
