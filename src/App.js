import React, { useState } from "react";

import "./App.css";

function App() {
  const [isNavActive, setIsNavActive] = useState(true);

  const toggleNav = () => setIsNavActive((prevIsNavActive) => !prevIsNavActive);

  return (
    <div className="App">
      <nav className={isNavActive ? "active" : ""} id="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="icon" id="toggle" onClick={toggleNav}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </nav>
    </div>
  );
}

export default App;
