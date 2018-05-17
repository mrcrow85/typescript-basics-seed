// type inferred as number
const rectangleX = 5;
// number type is explicitly declared
const rectangleY: number = 4;

// in a function the parameter types must be declared (strict mode in tsconfig)
function calcuateArea(x: number, y: number) {
  return `The area is : ${x * y}`;
}

console.log(calcuateArea(rectangleX, rectangleY));

// number, boolean, string
