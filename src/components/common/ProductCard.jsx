const ProductCard = ({ image, title, price, description }) => {
  return (
    <div style={{ border: "solid black" }}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductCard;
