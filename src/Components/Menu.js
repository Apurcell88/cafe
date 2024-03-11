import MenuNav from "./MenuNav";
import FoodCard from "./FoodCard";

import { useEffect, useState } from "react";

const Menu = () => {
  // STATE MANAGEMENT
  const [menu, setMenu] = useState([]);
  const [snacks, setSnacks] = useState(true);
  const [mains, setMains] = useState(false);
  const [sides, setSides] = useState(false);

  // GET MENU DATA
  useEffect(() => {
    try {
      const fetchMenu = async () => {
        const res = await fetch("../menuData.json");
        const data = await res.json();
        setMenu(data);
      };

      fetchMenu();
    } catch (err) {
      console.error(err);
    }
  });

  // FUNCTIONS
  const handleChange = (e) => {};

  return (
    <section className="menu--main-container">
      <MenuNav />
      <article className="menu--categories-container">
        <select name="categories" id="menu--categories">
          <option value="snacks" onChange={handleChange}>
            SNACKS
          </option>
          <option value="mains" onChange={handleChange}>
            MAINS
          </option>
          <option value="sides" onChange={handleChange}>
            SIDES
          </option>
        </select>
      </article>
      <div className="menu--food-container">
        {menu.map((foodItem) => {
          return (
            <FoodCard
              title={foodItem.title}
              description={foodItem.description}
              price={foodItem.price}
              image={foodItem.picture}
              type={foodItem.type}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
