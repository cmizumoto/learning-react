import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
  This project is to understand how react works, renders content using the DOM and virtual DOM.
  The codes left commented are using classes, and the not commented are hooks.
  Classes looks more intuitive and better to understand the lifecycle, but hooks looks a bit more complex, but if you have a good undestanding of how JS and React works, you are good to go. 
*/
reportWebVitals();
