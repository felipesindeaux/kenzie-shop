import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  box-sizing: border-box;
  height: 125px;
  width: 100%;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);

  h1 {
    margin: 0;
    cursor: pointer;
  }

  @media (min-width: 525px) {
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 5%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 525px) {
    flex-direction: row;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
