import React from "react";
import "./App.css";
import Navbar from "./containers/Nav.js";
import MainContainer from "./containers/MainContainer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
