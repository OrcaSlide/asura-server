import React from "react";
import ReactDOM from "react-dom";
import Title from "./componente/demo";
import "./stylesheets/index.scss";

ReactDOM.hydrate(
    <Title title="genial" />,
    document.getElementById("app"),
);
