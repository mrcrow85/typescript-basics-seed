function sumAll(arr: number[]) {
  return arr.reduce((prev, next) => prev + next);
}
// instead of using the arguments variable
function sumAllWithRestParams(message: string, ...arr: number[]) {
  console.log(message);

  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll([1, 2, 3]);

// we can pass any number of arguments to the function without explicitly sending as an array
const sumRest = sumAllWithRestParams("Hello", 1, 2, 3);

console.log("sum", sum);
console.log("sumRest", sumRest);
