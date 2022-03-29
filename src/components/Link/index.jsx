import { Container } from "./styled";
import { useSelector } from "react-redux";

const Link = ({ icon: Icon, children, onClick }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <div>
        <Icon />
        {cart.length > 0 && <p>{cart.length}</p>}
      </div>
      <button onClick={onClick}>{children}</button>
    </Container>
  );
};

export default Link;
