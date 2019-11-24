const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
