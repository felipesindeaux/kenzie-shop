import { Container, LinksContainer } from "./styled";
import Link from "../Link";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <h1 onClick={() => history.push("/")}>Kenzie Shop</h1>
      <LinksContainer onClick={() => history.push("/cart")}>
        <Link icon={FiShoppingCart}>Carrinho</Link>
      </LinksContainer>
    </Container>
  );
};

export default Header;
