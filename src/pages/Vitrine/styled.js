import styled from "styled-components";

export const ProductsContainer = styled.ul`
  display: flex;
  align-items: center;
  width: 90%;
  overflow-x: auto;
  padding: 15px 15px;
  list-style: none;

  li + li {
    margin-left: 15px;
  }

  @media (min-width: 400px) {
    li + li {
      margin-left: 20px;
    }
  }
`;
