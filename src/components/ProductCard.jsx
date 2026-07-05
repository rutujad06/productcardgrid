import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <span>{product.tag}</span>
    </div>
  );
};

export default ProductCard;