const FoodCard = ({ title, description, price, image, type, id }) => {
  return (
    <div className="food-card--main-container" id={id}>
      <div>
        <img src={image} alt="menu item" className="food-card--image" />
      </div>
      <div className="food-card--info-container">
        <h1 className="food-card--title">{title}</h1>
        <p className="food-card--desc">{description}</p>
        <p className="food-card--price">{price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
