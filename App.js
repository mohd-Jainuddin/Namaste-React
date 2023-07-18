import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// const heading = [
//   React.createElement("h1", { className: "heading" }, "Namaste React!"),
//   React.createElement("div", { className: "heading" }, [
//     React.createElement("h1", {}, "Hii Jainuddin"),
//     React.createElement("h1", {}, "Hello jeee"),
//   ]),
// ];

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX--HTML like or XML like syntax but not HTML.

const jsxheading = <h1>Namaste React By JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
