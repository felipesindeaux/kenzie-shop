import Header from "../../components/Header";
import {
  Container,
  CartContainer,
  HeaderCart,
  ProductsContainer,
  FinalizarContainer,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import { useState } from "react";
import { useEffect } from "react";
import { resetCartThunk } from "../../store/modules/cart/thunk";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const localCart = JSON.parse(localStorage.getItem("@KenzieShop:cart"));
  const cart = useSelector((state) => state.cart);
  const [quantProdutos, setQuantProdutos] = useState(cart.length);
  const [total, setTotal] = useState(
    cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0).toFixed(2)
  );

  const recalculateFinalizar = () => {
    setQuantProdutos(cart.length);
    setTotal(
      cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0).toFixed(2)
    );
  };

  useEffect(() => {
    recalculateFinalizar();
  }, [cart]);

  return (
    <>
      <Header />

      {quantProdutos > 0 ? (
        <Container>
          <CartContainer>
            <HeaderCart>
              <h3>Produtos</h3>
            </HeaderCart>

            <ProductsContainer>
              {localCart.map((product) => (
                <CartCard
                  name={product.name}
                  img={product.img}
                  price={product.price}
                  id={product.id}
                  amount={product.amount}
                  key={product.id}
                />
              ))}
            </ProductsContainer>
          </CartContainer>
          <FinalizarContainer>
            <h3>Resumo do pedido</h3>
            <div>
              <p>
                <span>{quantProdutos}</span> produtos:
              </p>
              <span>R$ {total}</span>
            </div>
            <button
              onClick={() => {
                dispatch(resetCartThunk());
                toast.success("Boa, o pedido chegará em sua casa!");
              }}
            >
              Finalizar pedido
            </button>
          </FinalizarContainer>
        </Container>
      ) : (
        <h1>Ops, não tem nenhum produto no carrinho :(</h1>
      )}
    </>
  );
};

export default Cart;
