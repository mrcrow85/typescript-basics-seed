// interface with index signature
interface Car {
  model: string;
  brand: string;
  // key must be either number or string
  [key: number]: string;
}

let car2: Car = { model: "Prius", brand: "Toyota" };

car2[1] = "xyz";

console.log(car2[1]); // xyz
