import MenuNav from "./MenuNav";
import FoodCard from "./FoodCard";

import { useEffect, useState } from "react";

const Menu = ({ setDisplayMenu }) => {
  // STATE MANAGEMENT
  const [menu, setMenu] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [mains, setMains] = useState([]);
  const [sides, setSides] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [displaySnacks, setDisplaySnacks] = useState(false);
  const [displayMains, setDisplayMains] = useState(false);
  const [displaySides, setDisplaySides] = useState(false);

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
  // GET CATEGORY FOOD ITEMS
  const populateCategoryFood = () => {
    menu.map((foodItem) => {
      if (foodItem.type === "snack" && snacks.length < 4) {
        // using 4 for all of them since it's a quick but janky fix. All the lists currently have 4 items.
        setSnacks((prev) => [...prev, foodItem]);
      }

      if (foodItem.type === "main" && mains.length < 4) {
        setMains((prev) => [...prev, foodItem]);
      }

      if (foodItem.type === "side" && sides.length < 4) {
        setSides((prev) => [...prev, foodItem]);
      }
    });
  };

  const handleChange = (e) => {
    populateCategoryFood();

    setSelectedCategory(e.target.value);
    console.log(snacks);

    switch (selectedCategory) {
      case "snacks":
        setDisplaySnacks(true);
        setDisplayMains(false);
        setDisplaySides(false);
        break;
      case "mains":
        setDisplaySnacks(false);
        setDisplayMains(true);
        setDisplaySides(false);
        break;
      case "sides":
        setDisplaySnacks(false);
        setDisplayMains(false);
        setDisplaySides(true);
        break;
      default:
        break;
    }
  };

  return (
    <section className="menu--main-container">
      <MenuNav setDisplayMenu={setDisplayMenu} />
      <article className="menu--categories-container">
        <select name="categories" id="menu--categories" onChange={handleChange}>
          <option value="" selected disabled>
            {" "}
            CHOOSE AN OPTION
          </option>
          <option value="snacks">SNACKS</option>
          <option value="mains">MAINS</option>
          <option value="sides">SIDES</option>
        </select>
      </article>
      <div className="menu--food-container">
        {selectedCategory === "snacks"
          ? snacks.map((snack) => {
              return (
                <FoodCard
                  title={snack.title}
                  desc={snack.description}
                  price={snack.price}
                  image={snack.picture}
                />
              );
            })
          : ""}

        {selectedCategory === "mains"
          ? mains.map((main) => {
              return (
                <FoodCard
                  title={main.title}
                  desc={main.description}
                  price={main.price}
                  image={main.picture}
                />
              );
            })
          : ""}

        {selectedCategory === "sides"
          ? sides.map((side) => {
              return (
                <FoodCard
                  title={side.title}
                  desc={side.description}
                  price={side.price}
                  image={side.picture}
                />
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Menu;
