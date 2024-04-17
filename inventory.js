/* This inventory.js file defines a Shoe constructor function to create shoe objects and performs various operations like
   searching for shoes finding the lowest and highest value per item, editing shoe properties, and ordering the inventory
   by value per item. Finally it outputs the inventory details and search results.
The following resources were used to complete this assignment:
 - https://www.w3schools.com/jsref/jsref_filter.asp
 - https://stackoverflow.com/questions/43576241/using-reduce-to-find-min-and-max-values
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 - https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/
For more information about this please visit https://github.com/IronMike4/object_oriented_programming_task.git */

// Define a constructor function to create shoe objects
function Shoe(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

// Create an array to store shoe instances
const shoeInventory = [];

// Create five shoe objects using the Shoe constructor
const shoe1 = new Shoe("Nike", "NIK555", 20, 99.99);
const shoe2 = new Shoe("Adidas", "ADI444", 15, 89.99);
const shoe3 = new Shoe("Puma", "PUM333", 25, 79.99);
const shoe4 = new Shoe("Reebok", "REE222", 18, 69.99);
const shoe5 = new Shoe("New Balance", "NEW111", 22, 59.99);

// Push the shoe instances to the shoe inventory array
shoeInventory.push(shoe1, shoe2, shoe3, shoe4, shoe5);

// Define a function to search for any shoe within the array
function searchShoe(name) {
  const foundShoes = shoeInventory.filter(
    (shoe) => shoe.name.toLowerCase() === name.toLowerCase()
  );
  return foundShoes;
}

// Define a function to find the shoe with the lowest value per item
function findLowestValueShoe() {
  return shoeInventory.reduce((lowest, current) =>
    current.valuePerItem < lowest.valuePerItem ? current : lowest
  );
}

// Define a function to find the shoe with the highest value per item
function findHighestValueShoe() {
  return shoeInventory.reduce((highest, current) =>
    current.valuePerItem > highest.valuePerItem ? current : highest
  );
}

// Define a function to edit all 4 properties for each of the five shoe instances
function editShoes(newShoeData) {
  newShoeData.forEach((data, index) => {
    Object.assign(shoeInventory[index], data);
  });
}

// Define a function to order all of the objects in ascending order based on the "Value per item" property
function orderShoesByValue() {
  return shoeInventory.slice().sort((a, b) => a.valuePerItem - b.valuePerItem);
}

// Output the shoe inventory with details
console.log("\nShoe Inventory:");
console.table(shoeInventory);

// Display search results for Adidas shoes
console.log("\nSearch Results for Adidas:");
console.table(searchShoe("Adidas"));

// Display the shoe with the lowest value per item
console.log(`\nThe shoe with the lowest value per item is ${findLowestValueShoe().name} with a value per item of $${findLowestValueShoe().valuePerItem}.`);
console.table([findLowestValueShoe()]);

// Display the shoe with the highest value per item
console.log(`\nThe shoe with the highest value per item is ${findHighestValueShoe().name} with a value per item of $${findHighestValueShoe().valuePerItem}.`);
console.table([findHighestValueShoe()]);

// Edit shoe inventory with new data
editShoes([
  {
    name: "Fila",
    productCode: "FIL999",
    quantity: 30,
    valuePerItem: 89.99,
  },
  { name: "Vans", productCode: "VAN888", quantity: 25, valuePerItem: 59.99 },
  {
    name: "Yeezy",
    productCode: "YEE777",
    quantity: 20,
    valuePerItem: 99.99,
  },
  { name: "Asics", productCode: "ASI666", quantity: 15, valuePerItem: 49.99 },
  {
    name: "Bathu",
    productCode: "BUT555",
    quantity: 10,
    valuePerItem: 79.99,
  },
]);

// Output updated shoe inventory after editing
console.log("\nUpdated Shoe Inventory:");
console.table(shoeInventory);

// Display ordered shoe inventory by value per item
console.log("\nOrdered Shoe Inventory by Value Per Item:");
console.table(orderShoesByValue());
