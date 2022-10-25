import styled, { createGlobalStyle } from "styled-components";

export const GLobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Container = styled.nav`
  max-width: 75%;
  margin: 0 auto;
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
    background-color: #bee9e8;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;
const WrapperDotsTwo = styled.div`
  position: absolute;
  /* z-index: 999; */
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
`;
