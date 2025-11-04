// assignment 35 to 38 start here

// Quesytion 1
// Write a function that displays current date & time in your
// browser.

// answer 1 
function displayDateTime() {
    var currentDate = new Date();
    document.write("Current date and time: " + currentDate);
}
displayDateTime();

// question 2
// Write a function that takes first & last name and then it
// greets the user using his full name.
// answer 2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}
greetUser("zobiya", "fahim");

// question 3   
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// answer 3
function addNumbers(num1, num2) {
    return num1 + num2;
}
var sum = addNumbers(5, 10);
document.write("<br>Sum: " + sum);

// question 4
// Write a function that takes three arguments num1, num2 &
// num3. Compute and return the
// average of the three numbers.
// answer 4
function computeAverage(num1, num2, num3) {
    var average = (num1 + num2 + num3) / 3;
    return average;
}
var avg = computeAverage(10, 20, 30);
document.write("<br>Average: " + avg);
// question 5
// 5. Write a function that squares its argument.
// answer 5
function squareNumber(num) {
    return num * num;
}
var squared = squareNumber(4);
document.write("<br>Square: " + squared);
// question 6
// 6. Write a function that computes factorial of a number.
// answer 6
function computeFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    var factorial = 1;
    for (var i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
var fact = computeFactorial(5);
document.write("<br>Factorial: " + fact);
// question 7`
// Write a function that take start and end number as inputs
// & display counting in your browser.
// answer 7
function displayCounting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
}
document.write("<br>Counting: ");
displayCounting(1, 10);


// question 8
// Write a function that computes the hypotenuse of a right
// angled triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// answer 8
function computeHypotenuse(base, perpendicular) {
    function square(num) {
        return num * num;
    }
    var hypotenuse = Math.sqrt(square(base) + square(perpendicular));
    return hypotenuse;

}
var hypotenuseLength = computeHypotenuse(3, 4);
document.write("<br>Hypotenuse: " + hypotenuseLength);
// question 9
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables
// answer 9
function calculateArea(width, height) {
    return width * height;
}
var area = calculateArea(5, 10);
document.write("<br>Area of rectangle: " + area);
var w = 7;
var h = 12;
var areaWithVars = calculateArea(w, h);
document.write("<br>Area of rectangle with variables: " + areaWithVars);


// question 10
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// answer 10
function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
var palindromeCheck = isPalindrome("madam");

document.write("<br>Is 'madam' a palindrome? " + palindromeCheck);


// question 11

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// answer 11

function toTitleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');

}
var titleCasedStr = toTitleCase("hello world from javascript");
document.write("<br>Title Cased: " + titleCasedStr);

// question 12
// Write a JavaScript function that accepts a string as a
// parameter and finds the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// answer 12
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
var longest = findLongestWord("The quick brown fox jumps over the lazy dog");
document.write("<br>Longest word: " + longest);

// question 13
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// answer 13

function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}
var letterCount = countLetterOccurrences("hello world", "o");
document.write("<br>Occurrences of 'o': " + letterCount);

// question 14
// /14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

// answer 14

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("<br>The circumference is " + circumference);
}
function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("<br>The area is " + area);
}
var radius = 5;
calcCircumference(radius);
calcArea(radius);

// assignment 35 to 38 end here






















