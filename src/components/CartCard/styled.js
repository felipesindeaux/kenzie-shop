import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 20px;
  border-bottom: 2px solid rgb(172, 165, 165);

  img {
    width: 50px;
  }

  h3 {
    text-align: center;
    font-weight: 600;
  }

  span {
    font-weight: 700;
  }

  p {
    margin: 0;
  }

  @media (min-width: 770px) {
    flex-direction: row;
    height: 136px;

    img {
      width: auto;
      height: 100%;
    }

    h3 {
      width: 300px;
    }
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    border: none;
    background: lightgray;
    border-radius: 4px;
    font-size: 20px;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;
