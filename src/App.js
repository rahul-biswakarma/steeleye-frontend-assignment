import "./App.css";
import React from "react";

import List from "./components/Lists";

const items = [
  { text: "Monitor", selected: false },
  { text: "Keyboard", selected: false },
  { text: "Mouse", selected: false },
  { text: "Gamepad", selected: false },
  { text: "RTX 3050", selected: false },
];

const Home = () => {
  return (
    <div className="AppContainer">
      <List items={items} />
    </div>
  );
};

export default Home;
