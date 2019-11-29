import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Pet name="Kiwi" animal="bird" breed="cockatiel" />
      <Pet name="milo" animal="dog" breed="beagle" />
      <Pet name="Luna" animal="dog" breed="havanese" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));

// return React.createElement("div", {}, [
//   React.createElement("h1", {}, "Adopt Me!"),
//   React.createElement(Pet, {
//     name: "kiwi",
//     animal: "bird",
//     breed: "cockatiel"
//   }),
//   React.createElement(Pet, {
//     name: "milo",
//     animal: "dog",
//     breed: "beagle"
//   }),
//   React.createElement(Pet, {
//     name: "bubbles",
//     animal: "cat",
//     breed: "fat"
//   })
// ]);
