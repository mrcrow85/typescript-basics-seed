const pizza = {
  name: "Pepperoni",
  price: 15,
  // Its the same as getName: function(){return this.getName;}
  getName() {
    return this.getName;
  }
};

const toppings = ["pickles"];

// old way
const order = {
  pizza: pizza,
  toppings: toppings
};

//new way
const betterOrder = { pizza, toppings };

// even better way
function createOrder(pizza: any, toppings: any) {
  return { pizza, toppings };
}

console.log(order);

console.log(betterOrder);

console.log(createOrder(pizza, toppings));
