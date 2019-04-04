import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./Components/Badge";

const container = document.getElementById("app");

ReactDom.render(<Badge />, container);
