import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  width: 98vw;
  justify-content: center;
  @media (max-width: 1240px) {
    bottom: -80px;
  }
  @media (max-width: 768px) {
    bottom: 0px;
  }
  @media (max-width: 590px) {
    bottom: -70px;
  }
  @media (max-width: 470px) {
    bottom: -160px;
  }
`;

export const Dot = styled.div`
  width: 20px;
  height: 5px;
  border-radius: 6px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
`;
export const Wrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow: hidden;
`;

export const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
  background-repeat: no-repeat;
  height: auto;
`;

export const Arrow = styled.div`
  position: absolute;
  z-index: 99999999999999;
  color: #1295bd;
  background-color: black;
  left: ${(props) => (props.left ? "10px" : "auto")};
  right: ${(props) => (props.right ? "10px" : "auto")};
  top: 50vh;
  height: 50px;
  width: 50px;
  border-radius: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  cursor: pointer;
  animation-name: ${(props) =>
    (props.right && "right") || (props.left && "left")};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  @keyframes left {
    0% {
      left: 80px;
    }
    50% {
      left: 110px;
    }
    100% {
      left: 80px;
    }
  }
  @keyframes right {
    0% {
      right: 80px;
    }
    50% {
      right: 110px;
    }
    100% {
      right: 80px;
    }
  }
  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
    font-size: 10px;
    @keyframes left {
      0% {
        left: 10px;
      }
      50% {
        left: 20px;
      }
      100% {
        left: 10px;
      }
    }
    @keyframes right {
      0% {
        right: 10px;
      }
      50% {
        right: 20px;
      }
      100% {
        right: 10px;
      }
    }
  }
`;
