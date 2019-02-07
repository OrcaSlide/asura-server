import React from "react";
import ReactDOM from "react-dom";
import Title from "./componente/demo";
import "./stylesheets/Main.scss";

ReactDOM.hydrate(
    <Title title="genialc" />,
    document.getElementById("app"),
);
