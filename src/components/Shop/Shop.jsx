import { useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import "./Shop.css";

const Shop = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const handleAddToCart = (product) => {
        setCartProducts([...cartProducts, product])
    };
  return (
    <>
      <div className="shop-container">
        <Products handleAddToCart={handleAddToCart} />
        <Cart cartProducts={cartProducts}/>
      </div>
    </>
  );
};

export default Shop;
