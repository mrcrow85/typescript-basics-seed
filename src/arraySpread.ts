const pizzas = ["pepperoni", "salami"];
const newPizzas = ["margarita", "bacon"];

//  old way using concat method
var oldAllToppings = pizzas.concat(newPizzas);
console.log(oldAllToppings);

// array spread - new array with a copy of every element of each array
const allToppings = [...pizzas, ...newPizzas];
console.log(allToppings);
