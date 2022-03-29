import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 1170px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 95%;
  }
`;

export const CartContainer = styled.div`
  width: 90%;
  height: fit-content;
  margin-top: 50px;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  margin-bottom: 5px;
  max-width: 750px;
`;

export const HeaderCart = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 2px solid rgb(172, 165, 165);

  h3 {
    margin: 0;
    font-weight: 600;
  }
`;

export const ProductsContainer = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const FinalizarContainer = styled.div`
  width: 288px;
  height: 230px;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  h3 {
    margin: 0;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  span {
    font-weight: 700;
  }

  p {
    margin: 0;
  }

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
`;
