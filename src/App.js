import "./App.css";
import { useState } from "react";

import Landing from "./Components/Landing";
import Menu from "./Components/Menu";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className="App">
      <div className="overlay"></div>
      {displayMenu ? (
        <Menu />
      ) : (
        <Landing displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
      )}
    </div>
  );
}

export default App;
