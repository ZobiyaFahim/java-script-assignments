// assignment 17 to 20
// Question 1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

// Answer

var multiArray = [[]];

// Question 2
// Declare and initialize a multidimensional array
// representing the following matrix:
// 1 2 3
// 4 5 6
// 7 8 9
// Answer
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

// Question 3
// Write a program to print numeric counting from 1 to 10.
// Answer
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// Question 4
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// Answer
var tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
var tableLength = parseInt(prompt("Enter length of multiplication table:"));
console.log("Multiplication table of " + tableNumber);
console.log("Length " + tableLength);
for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  console.log(tableNumber + " x " + i + " = " + result);
}
// Question 5
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// Answer
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}   
console.log("Element at index 0 is " + fruits[0]);
console.log("Element at index 1 is " + fruits[1]);
console.log("Element at index 2 is " + fruits[2]);
console.log("Element at index 3 is " + fruits[3]);
console.log("Element at index 4 is " + fruits[4]);

// Question 6   
// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
// 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k,
// 20k
// Answer
console.log("Counting:");
for (var i = 1; i <= 15; i++) {
    console.log(i);
}

console.log("Reverse counting:");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Even:");
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}
console.log("Odd:");
for (var i = 1; i < 20; i += 2) {
    console.log(i);
}
console.log("Series:");
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}
// Question 7
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”,
// “patties”]
// Write a program to enable “search by user input” in
// an array.
// After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the
// user enters cookie, Cookie, COOKIE or coOkIE, they
// should be able to find the item.
// Answer
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        break;
    }
}
if (found) {
    console.log(userInput + " is available at index " + i + " in our bakery.");
}
else {
    console.log("We are sorry. " + userInput + " is not available in our bakery.");
}
// Question 8
// Write a program to identify the largest number in
// the given array.
// A = [24, 53, 78, 91, 12].
// Answer
var A = [24, 53, 78, 91, 12];
var largest = A[0]; 
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
console.log("The largest number is " + largest);    
// Question 9
// Write a program to identify the smallest number in
// the given array.
// A = [24, 53, 78, 91, 12]
// Answer
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
console.log("The smallest number is " + smallest);
// Question 10
// Write a program to print multiples of 5 ranging 1
// to 100.
// Answer
for (var i = 5; i <= 10; i += 5) {
    console.log(i);
}
// end  of assignment 17 to 20  ................


