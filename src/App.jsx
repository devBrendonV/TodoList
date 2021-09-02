import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Content></Content>
      </Router>
    </div>
  );
};

export default App;
