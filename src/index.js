import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./myComponent";

const root = ReactDOM.createRoot(document.getElementById("intro-react"));
root.render(
  <React.StrictMode>
    <myComponent />
  </React.StrictMode>
);
