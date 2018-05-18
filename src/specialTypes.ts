// inferred any type
let coupon;
coupon = undefined;

coupon = 25;
coupon = "abc";

//inferrred void type
function log(message: any) {
  console.log(message);
}

//void type explicitly declared
function log2(message: any): void {
  console.log(message);
}

// never type
function createError(message: string): never {
  throw new Error(message);
  // code here will never reach
}

// null
let coupon2: string | null = "25%";
function removeCoupon() {
  coupon2 = null;
}

// union and literal types
function selectSize(size: "small" | "medium" | "large") {
  console.log(size);
}

// we cant pass anything that is not small, medium or large
selectSize("large");

// function types - functions assigned to variables
let sumOrder: (price: number, quantity: number) => number;
sumOrder = (x, y) => x * y;
const total = sumOrder(25, 2);
// direct assignment
let sumOrder2: (price: number, quantity: number) => number = (x, y) => x * y;

// functions with optional parameters
let sumOrder3: (price: number, quantity?: number) => number = (x, y = 1) =>
  x * y;

//object type
let car: { model: string; brand: string } = { model: "F150", brand: "Ford" };

//Arrays
let colors: string[];
colors = ["black", "yellow"];
let colors2: Array<string>;
colors2 = ["black", "yellow"];

//tuple types
let array: [string, number, boolean];
array = ["", 1, true];
