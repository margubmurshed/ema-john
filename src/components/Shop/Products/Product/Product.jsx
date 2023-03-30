import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, price, seller, ratings } = product;
  return (
    <div className="product">
        <img src={img} alt={name} className="product-img" />
        <h3>{name}</h3>
        <div className="font-normal">
          <h4>Price : <span className="product-price">${price}</span></h4>
          <h5>Manufacturer : {seller}</h5>
          <h5>
            Ratings : {ratings} {ratings == 1 ? "star" : "stars"}
          </h5>
        </div>
      <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}> <FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</button>
    </div>
  );
};

export default Product;
