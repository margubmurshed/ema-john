import { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";

const Products = ({handleAddToCart, handleFetchCartProducts}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        handleFetchCartProducts(data)
      });
  }, []);
  return (
    <>
      <section className="products-container">
        <h2 className="products-title">Total Products : {products.length}</h2>
        <div className="product-items-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
