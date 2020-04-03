import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import ReactDOM from "react-dom";
// const render = ReactDOM.render;
import { render } from "react-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

render(<AboutPage />, document.getElementById("root"));
