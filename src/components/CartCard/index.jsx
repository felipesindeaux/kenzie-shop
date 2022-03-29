import { Container, ButtonsDiv } from "./styled";
import { useDispatch } from "react-redux";
import { addCartThunk, removeCartThunk } from "../../store/modules/cart/thunk";

const CartCard = ({ name, img, price, id, amount }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={img} alt={name}></img>
      <h3>{name}</h3>
      <span>R$ {price}</span>
      <ButtonsDiv>
        <p>
          Quantidade: <span>{amount}</span>
        </p>
        <div>
          <button onClick={() => dispatch(removeCartThunk(id))}>-</button>
          <button onClick={() => dispatch(addCartThunk(id))}>+</button>
        </div>
      </ButtonsDiv>
    </Container>
  );
};

export default CartCard;
