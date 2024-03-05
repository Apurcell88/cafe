import MenuNav from "./MenuNav";

import { useEffect, useState } from "react";

const Menu = () => {
  // STATE MANAGEMENT
  const [menu, setMenu] = useState({});

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

  return (
    <section className="menu--main-container">
      <MenuNav />
      <article className="menu--categories-container">
        <select name="categories" id="menu--categories">
          <option value="snacks">SNACKS</option>
          <option value="mains">MAINS</option>
          <option value="sweets">SWEETS</option>
        </select>
      </article>
    </section>
  );
};

export default Menu;
