import Header from "../../components/Header";
import ProductCard from "../../components/VitrineCard";
import { useSelector } from "react-redux";
import { ProductsContainer } from "./styled";

const Vitrine = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <Header />
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard
            name={product.name}
            id={product.id}
            img={product.img}
            price={product.price}
            key={product.id}
          />
        ))}
      </ProductsContainer>
    </>
  );
};

export default Vitrine;
