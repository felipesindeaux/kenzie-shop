import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  cursor: pointer;

  :hover {
    color: rgb(172, 165, 165);

    button {
      color: rgb(172, 165, 165);
      cursor: pointer;
    }
  }

  button {
    background: transparent;
    border: none;
    font-size: 15px;
    font-weight: 600;
  }

  div {
    position: relative;
  }

  p {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 50%;
    position: absolute;
    bottom: 15px;
    left: 10px;
    background: rgb(185, 74, 230);

    @media (min-width: 525px) {
      font-size: 14px;
      width: 20px;
      height: 20px;
      left: 20px;
      bottom: 20px;
    }
  }
`;
