const blackSquare = {
  name: "square",
  colors: ["black"],
  area: 20
};

// function shape({name, color}) {
//     console.log(name, toppings);
// }

function shape({ name, colors }: { name: string; colors: string[] }) {
  console.log(name, colors);
}

// variable renaming
function shapeRenaming({
  name: newName,
  colors: newColors
}: {
  name: string;
  colors: string[];
}) {
  console.log(newName, newColors);
}

function newShape({
  name: shapeName,
  colors
}: {
  name: string;
  colors: string[];
}) {
  return { shapeName, colors };
}

shape(blackSquare);

//destructuring the shapeName from the resulting object
const { shapeName } = newShape(blackSquare);
console.log(shapeName);

const shapes = ["star", "circle", "triangle"];
// old way
const firstItem = shapes[0];
// array destructuring
const [first, second, third] = shapes;
console.log(first);

function logShapes([first, second]: any) {
  console.log(first, second);
}

logShapes(shapes);
