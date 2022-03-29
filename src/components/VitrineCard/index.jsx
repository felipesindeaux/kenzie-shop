import { Container, ButtonsContainer } from "./styled";
import { useDispatch } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunk";

const ProductCard = ({ name, img, price, id }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addCartThunk(id));
  };

  return (
    <Container>
      <img src={img} alt={name}></img>
      <h3>{name}</h3>
      <span>R$ {price}</span>
      <ButtonsContainer>
        <button onClick={handleCart}>Adicionar ao carrinho</button>
      </ButtonsContainer>
    </Container>
  );
};

export default ProductCard;
