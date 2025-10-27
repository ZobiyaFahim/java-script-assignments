// js assaignment 26 to 30

// question 1
// Write a program that takes a positive integer from user &
// display the following in your browser.

// answer
var userInput = prompt("Enter a positive integer:");
var roundedValue = Math.round(userInput);
var floorValue = Math.floor(userInput);
var ceilValue = Math.ceil(userInput);
document.write("Number: " + userInput + "<br>");
document.write("Round off value: " + roundedValue + "<br>");
document.write("Floor value: " + floorValue + "<br>");
document.write("Ceil value: " + ceilValue + "<br>"); 
// question 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.    
// answer
var userInput = prompt("Enter a negative floating point number:");
var roundedValue = Math.round(userInput);
var floorValue = Math.floor(userInput);
var ceilValue = Math.ceil(userInput);
document.write("Number: " + userInput + "<br>");
document.write("Round off value: " + roundedValue + "<br>");
document.write("Floor value: " + floorValue + "<br>");
document.write("Ceil value: " + ceilValue + "<br>"); 
// question 3       
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// answer
var userInput = prompt("Enter a number to find its absolute value:");
var absoluteValue = Math.abs(userInput);
document.write("The absolute value of " + userInput + " is " + absoluteValue);
// question 4
// Write a program that simulates a dice using
// random() method of JS Math class. Display the value of
// dice in your browser.
// answer

var diceRoll = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceRoll);
// question 5
// Write a program that simulates a coin toss using
// random() method of JS Math class. Display the value of
// coin in your browser.

var coinToss = Math.floor(Math.random() * 2) + 1;
var coinSide = (coinToss === 1) ? "Heads" : "Tails";
document.write("Random coin value: " + coinSide);
// question 6
// Write a program that shows a random number between 1
// and 100 in your browser.
// answer
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber);
// 


// ......................... assaigment end......................








    

