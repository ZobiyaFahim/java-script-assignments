// // assignment 14 to 16 
//     // Question 1 
// //  Declare an empty array using JS literal notation to store
// // student names in future.

// // Answer 1 

let studentNames = [];
console.log(studentNames);



// // Question 2
// // Declare an empty array using JS object notation to store
// // student names in future.
// // Answer 2

let studentNamesObj = new Array();
console.log(studentNamesObj);

// // Question 3

// // Declare and initialize a strings array.

// // Answer 3

let stringsArray = ["apple", "banana", "cherry", "orange", "mango"];
console.log(stringsArray);

// // Question 4
// // Declare and initialize a numbers array.
// // Answer 4

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArray);

// // Question 5
// // Declare and initialize a boolean array.

// // Answer 5
let booleanArray = [true, false, true, false];
console.log(booleanArray);
// // Question 6
// // Declare and initialize a mixed array.
// // Answer 6

let mixedArray = ["apple", 1, true, "banana", 2, false];
console.log(mixedArray);
// // Question 7
// // Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:
// // Answer 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h3>Qualifications in Pakistan:</h3>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

// // Question 8
// // Write a program to store 3 student names in an array.
// // Take another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:
// // Answer 8

let studentNamesQ8 = ["Alice", "Bob", "Charlie"];
let studentScores = [450, 400, 480];
let totalMarks = 500;
for (let i = 0; i < studentNamesQ8.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Score of " + studentNamesQ8[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>");
}
// // Question 9
// // Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // index. Display the updated array in your browser.
// // g. Ask the user at which index he/she wants to delete 
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // index. . Display the updated array in your browser.
// // Answer 9  
let colors = ["Red", "Green", "Blue"];
document.write("<h3>Initial Colors:</h3>");
document.write(colors.join(", ") + "<br>");
// a. Add color to the beginning
let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
document.write("<h3>After adding to the beginning:</h3>");
document.write(colors.join(", ") + "<br>");
// b. Add color to the end
let colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("<h3>After adding to the end:</h3>");
document.write(colors.join(", ") + "<br>");
// c. Add two more colors to the beginning
colors.unshift("Yellow", "Purple");
document.write("<h3>After adding two more to the beginning:</h3>");
document.write(colors.join(", ") + "<br>");
// d. Delete the first color
colors.shift();
document.write("<h3>After deleting the first color:</h3>");
document.write(colors.join(", ") + "<br>");
// e. Delete the last color
colors.pop();
document.write("<h3>After deleting the last color:</h3>");
document.write(colors.join(", ") + "<br>");
// f. Add color at a specific index
let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorNameToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorNameToAdd);
document.write("<h3>After adding color at index " + indexToAdd + ":</h3>");
document.write(colors.join(", ") + "<br>");
// g. Delete color(s) from a specific index
let indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h3>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ":</h3>");
document.write(colors.join(", ") + "<br>");
// // Question 10
// // Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.
// // Answer 10
let studentScoresQ10 = [320, 230, 480, 120];
document.write("<h3>Student Scores:</h3>");
document.write("Scores: " + studentScoresQ10.join(", ") + "<br>");
studentScoresQ10.sort(function (a, b) { return a - b });
document.write("Sorted Scores: " + studentScoresQ10.join(", ") + "<br>");
// // Question 11
// // Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.
// // Answer 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(0, 3);
document.write("<h3>Cities List:</h3>");
document.write("Cities: " + cities.join(", ") + "<br>");
document.write("Selected Cities: " + selectedCities.join(", ") + "<br>");
// // Question 12
// // Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)     
// // Answer 12
let arr = ["This ", " is ", " my ", " cat"];
let singleString = arr.join("");
document.write("<h3>Array to String:</h3>");
document.write("Array: " + arr.join(", ") + "<br>");
document.write("String: " + singleString + "<br>");
// // Question 13
// // Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)
// // Answer 13
let fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
document.write("<h3>FIFO Array:</h3>");
document.write("Array: " + fifoArray.join(", ") + "<br>");
document.write("Accessing values in FIFO order:<br>");
while (fifoArray.length > 0) {
    document.write(fifoArray.shift() + "<br>");
}
// // Question 14
// // Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last In-
// First Out)
// // Answer 14
let lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
document.write("<h3>LIFO Array:</h3>");
document.write("Array: " + lifoArray.join(", ") + "<br>");
document.write("Accessing values in LIFO order:<br>");
while (lifoArray.length > 0) {
    document.write(lifoArray.pop() + "<br>");
}
// // Question 15
// // Write a program to store phone manufacturers (Apple,
// // Samsung, Motorola, Nokia, Sony & Haier) in an array.
// // Display the following dropdown/select menu in your
// // browser using document.write() method:
// // Answer 15
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h3>Phone Manufacturers:</h3>");
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

// // end of assignment 14 to 16


