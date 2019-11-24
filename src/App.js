import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "kiwi",
      animal: "bird",
      breed: "cockatiel"
    }),
    React.createElement(Pet, {
      name: "milo",
      animal: "dog",
      breed: "beagle"
    }),
    React.createElement(Pet, {
      name: "bubbles",
      animal: "cat",
      breed: "fat"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
