//Exercise 1

const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "BMW", "Ferrari"];

console.log(cars.sort());

// Exercise 2

const fruits = ["apple", "banana", "kiwi"];
console.log(fruits.push("orange"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

const animals = ["monkey", "horse", "dog"];
console.log(animals.sort());
console.log(animals.unshift("cat"));
console.log(animals);

// Exercise 3

const fruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

// var varia = fruit.split("/").join("<br>");
let varia2 = fruit.replaceAll("/", "<br>");

document.write(varia2);