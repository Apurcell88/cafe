const FoodCard = ({ title, description, price, image, type }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt="menu item" />
    </div>
  );
};

export default FoodCard;
