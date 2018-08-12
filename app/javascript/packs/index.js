import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/js/bootstrap';
import "./bootstrap.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
      <App />,
    document.getElementById("root")
  );
});
