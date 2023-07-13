const heading = React.createElement("div", { className: "div" }, [
  React.createElement("div", {}, [
    React.createElement("h1", { id: "header" }, "I am from React Div!"),
    React.createElement("h1", { id: "header" }, "I am from React Div!"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", { id: "header" }, "I am from React Div!"),
    React.createElement("h1", { id: "header" }, "I am from React Div!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
