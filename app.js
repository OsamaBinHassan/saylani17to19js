// Declare and initialize an empty multidimensional array (array of arrays)
let emptyArray = [];

// Example: Creating a 2D array with 3 rows and 3 columns
const rows = 3;
const columns = 3;

for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
}
// Declare and initialize a multidimensional array representing a matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Function to print multiplication table
function printMultiplicationTable(tableNumber, length) {
    console.log(`Multiplication table of ${tableNumber} up to length ${length}:`);
    for (let i = 1; i <= length; i++) {
        console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
    }
}

// Take input from the user
let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
let length = parseInt(prompt("Enter the length of the multiplication table:"));

// Validate input
if (isNaN(tableNumber) || isNaN(length)) {
    console.log("Please enter valid numbers.");
} else {
    // Call the function to print the multiplication table
    printMultiplicationTable(tableNumber, length);
}
// Define the array of fruits
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Print items of the array using a for loop
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
function generateSeries() {
    // a. Counting
    let counting = "";
    for (let i = 1; i <= 15; i++) {
        counting += i + ", ";
    }
    document.getElementById("counting").innerText = counting.slice(0, -2);

    // b. Reverse counting
    let reverseCounting = "";
    for (let i = 10; i >= 1; i--) {
        reverseCounting += i + ", ";
    }
    document.getElementById("reverseCounting").innerText = reverseCounting.slice(0, -2);

    // c. Even
    let even = "";
    for (let i = 0; i <= 20; i += 2) {
        even += i + ", ";
    }
    document.getElementById("even").innerText = even.slice(0, -2);

    // d. Odd
    let odd = "";
    for (let i = 1; i <= 19; i += 2) {
        odd += i + ", ";
    }
    document.getElementById("odd").innerText = odd.slice(0, -2);

    // e. Series
    let series = "";
    for (let i = 2; i <= 20; i += 2) {
        series += i + "k, ";
    }
    document.getElementById("series").innerText = series.slice(0, -2);
}

generateSeries();

// Define the array
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
    // Convert the item to lowercase for case-insensitive search
    item = item.toLowerCase();

    // Check if the item is found in the array
    let found = A.includes(item);

    // Prompt the user whether the item is found or not
    if (found) {
        console.log(`Yes, '${item}' is found in the list.`);
    } else {
        console.log(`No, '${item}' is not found in the list.`);
    }
}

// Prompt the user to enter the item to search
let userInput = prompt("Enter the item to search:");

// Call the function to search for the item
searchItem(userInput);

// Define the array
let a = [24, 53, 78, 91, 12];

// Initialize a variable to store the maximum number
let maxNumber = a[0];

// Iterate through the array to find the largest number
for (let i = 1; i < A.length; i++) {
    if (a[i] > maxNumber) {
        maxNumber = a[i];
    }
}

// Print the largest number
console.log("The largest number in the array is:", maxNumber);
