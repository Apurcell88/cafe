const FoodCard = ({ title, description, price, image, type }) => {
  return (
    <div className="food-card--main-container">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div>
        <img src={image} alt="menu item" className="food-card--image" />
      </div>
    </div>
  );
};

export default FoodCard;
