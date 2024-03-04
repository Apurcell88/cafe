import Nav from "./Nav";

const Landing = ({ displayMenu, setDisplayMenu }) => {
  const handleMenu = () => {
    setDisplayMenu((prev) => {
      return !prev;
    });
  };

  return (
    <div className="landing--main-container">
      <div className="overlay"></div>
      <Nav />
      <main className="landing--wrapper-container">
        <article
          className="landing--flex-container landing--flex-left-container"
          id="flex-bottom"
        >
          <div className="landing--discount-container">
            <p id="landing--discount">10% discount on all menu items</p>
            <p id="landing--discount-code">code VEGETARIAN CARD</p>
          </div>
          <div className="landing--contact-container">
            <h2 className="ruthie landing--contact">Contact</h2>
            <p>
              WE ARE OPEN EVERYDAY FROM 8AM TO 8PM. WE LOOK FORWARD TO YOUR
              VISIT!
            </p>
          </div>
        </article>
        <article className="landing--flex-container landing--flex-bottom-container">
          <h2 className="text-center font-weight-400">
            ABOUT <span className="ruthie">Veggie</span>
          </h2>

          <h2 className="text-center">
            <button className="landing--menu-btn" onClick={handleMenu}>
              <p className="ruthie negative-margin">Show</p>

              <p className="landing--menu-text">THE</p>
              <p className="landing--menu-text" id="landing--menu">
                MENU
              </p>
            </button>
          </h2>

          <button id="landing--cart-btn">MY CART</button>
        </article>

        <article
          className="landing--flex-container landing--flex-right-container"
          id="landing--established-container"
        >
          <h2>WE BELIEVE WELL-BEING IS FOR EVERYONE</h2>
          <h2>
            <span className="ruthie">Veggie</span> Cafe
          </h2>
          <p>EST. 2024</p>
        </article>
      </main>
    </div>
  );
};

export default Landing;
