const MenuNav = ({ setDisplayMenu }) => {
  return (
    <ul className="menu-nav--links">
      <li className="menu-nav--link">
        <button
          className="menu-nav--home-btn"
          onClick={() => setDisplayMenu(false)}
        >
          HOME
        </button>
      </li>
      <li className="menu-nav--link">ABOUT</li>
      <li className="menu-nav--link">DELIVERY</li>
      <li className="menu-nav--link">CONTACT</li>
    </ul>
  );
};

export default MenuNav;
