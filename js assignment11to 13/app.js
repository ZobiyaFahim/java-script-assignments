
// assignment 11 to 13

// Question 1

// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



// ANSWER 1

var char = prompt("Enter a character: ");
var ascii = char.charCodeAt(0);

if (ascii >= 65 && ascii <= 90) {
  alert(char + " is an uppercase letter.");
}
else if (ascii >= 97 && ascii <= 122) {
  alert(char + " is a lowercase letter.");
}
else if (ascii >= 48 && ascii <= 57) {
  alert(char + " is a digit.");
}
else {
  alert(char + " is a special character.");
}
// Question 2

// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// answer 2


var int1 = parseInt(prompt("Enter the first integer: "));
var int2 = parseInt(prompt("Enter the second integer: "));
if (int1 > int2) {
  alert(int1 + " is larger than " + int2);
}
else if (int2 > int1) {
  alert(int2 + " is larger than " + int1);
}
else {  
    alert("Both integers are equal.");
}

// Question 3

//  Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// ANSWER 3

 var num = parseFloat(prompt("Enter a number: "));
if (num > 0) {
  alert(num + " is a positive number.");
}
else if (num < 0) {
  alert(num + " is a negative number.");
}
else {
  alert("The number is zero.");
}
// Question 4

// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// ANSWER 4

var char = prompt("Enter a character: ");
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
  alert(char + " is a vowel.");
} else {
    alert(char + " is not a vowel.");
}
// Question 5

// // Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// ANSWER 5

var password = "mypassword"; // Predefined password
var userInput = prompt("Enter your password: ");    
if (userInput === "") {
  alert("Please enter your password.");
}
else if (userInput === password) {

    alert("Correct! The password you entered matches the original password.");
}
else {
    alert("Incorrect password.");
}
// Question 6

// This if/else statement does not work. Try to fix it:
// var greeting;    
// var hour = 13; // Example hour in 24-hour format    
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// greeting = "Good evening";
// alert(greeting);

// ANSWER 6

var greeting;
var hour = 13; // Example hour in 24-hour format    
if (hour < 18) {
  greeting = "Good day";
}
else {
  greeting = "Good evening";
}

alert(greeting);

// Question 7

// Write a program that takes time as input from user in 24
// hours format like: 1900 = 7pm. Implement the following
// case using if, else & else if statements
// i. If time is between 0000 to 1200 noon, then
// greet “Good morning”
// ii. If time is between 1200 to 1700, then greet
// “Good afternoon”
// iii. If time is between 1700 to 2100, then greet
// “Good evening”
// iv. If time is between 2100 to 2359, then greet
// “Good night”

// ANSWER 7


var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): "));
if (time >= 0 && time < 1200) {
  alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}
else {
    alert("Invalid time format.");
}

// End of assignment 11 to 13









