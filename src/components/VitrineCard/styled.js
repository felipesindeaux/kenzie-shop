import styled from "styled-components";

export const Container = styled.li`
  width: 225px;
  height: 400px;
  background: white;
  flex-shrink: 0;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-radius: 2px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  img {
    height: 200px;
  }

  h3 {
    margin: 0;
    font-weight: 600;
  }

  span {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: rgb(96, 66, 228);
    color: white;
    border: none;
    height: 40px;
    padding: 10px 20px;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      filter: brightness(1.2);
    }
  }

  svg {
    width: 25px;
    height: 25px;
    color: grey;
    cursor: pointer;

    &:hover {
      width: 30px;
      height: 30px;
      color: red;
      fill: red;
      transition: 0.1s;
    }
  }
`;
