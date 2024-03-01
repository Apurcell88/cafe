import "./App.css";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
