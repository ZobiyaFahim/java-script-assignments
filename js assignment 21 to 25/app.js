// assaignment 21 to 25

// Question 1
    // Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// answer 1


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + "! Welcome to our website.");
// Question 2
    // Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// answer 2

var mobileModel = prompt("Enter your favorite mobile phone model");
var modelLength = mobileModel.length;
document.write("My favorite mobile phone is: " + mobileModel + "<br>");
document.write("Length of string: " + modelLength);
// Question 3
    // Write a program to find the index of letter "n" in the
// word "Pakistani" and display the result in your browser .
// answer 3

var word = "Pakistani";
var indexN = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + indexN);
// Question 4
    // Write a program to find the last index of letter "l" in
// the word "Hello World" and display the result in your
// browser.
// answer 4
var phrase = "Hello World";
var lastIndexL = phrase.lastIndexOf("l");
document.write("String: " + phrase + "<br>");
document.write("Last index of 'l': " + lastIndexL); 
// Question 5
    // Write a program to find the character at 3rd index in
// the word "Pakistani" and display the result in your
// browser.
// answer 5
var word = "Pakistani";
var charAtIndex3 = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + charAtIndex3);    
// Question 6
    // Repeat Q1 using string concat() method.  
// answer 6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);
alert("Hello " + fullName + "! Welcome to our website.");
// Question 7
    // Write a program to replace the "Hyder" to "Islam" in the
// word "Hyderabad" and display the result in your browser.
// answer 7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);
// Question 8
    // Write a program to replace all occurrences of "and" in
// the string with "&" and display the result in your   
// browser. var message = "Ali and Sami are best friends. They
// play cricket and football together.";
// answer 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Original message: " + message + "<br>");
document.write("After replacement: " + newMessage); 
// Question 9
    // Write a program that converts a string "472" to a
// number 472. Display the values & types in your browser.
// answer 9
var strNumber = "472";  
var numNumber = Number(strNumber);
document.write("Value: " + strNumber + "<br>");
document.write("Type: " + typeof strNumber + "<br>");
document.write("Value: " + numNumber + "<br>");
document.write("Type: " + typeof numNumber);
// Question 10
    // Write a program that takes user input. Convert and
// show the input in capital letters.
// answer 10
var userInput = prompt("Enter a string");
var upperCaseInput = userInput.toUpperCase();   
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCaseInput); 
// Question 11

    // Write a program that takes user input. Convert and
// show the input in title case.
// answer 11    
var userInput = prompt("Enter a string");
var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCaseInput);
// Question 12
    // Write a program that converts the variable num to
// string. var num = 35.36 ; Remove the dot to display
// "3536" display in your browser.
// answer 12
var num = 35.36;
var strNum = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("String: " + strNum); 
// Question 13
    // Write a program to take user input and store username
// in a variable. If the username contains any special
// symbol among [@ . , !], prompt the user to enter a valid
// username.
// answer 13
var username = prompt("Enter your username");
var invalidSymbols = /[@.,!]/;
if (invalidSymbols.test(username)) {
    alert("Please enter a valid username without special symbols [@ . , !]");
} else {
    alert("Username accepted: " + username);
}
// Question 14
    // You have an array
// A = [cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an
// array. After searching, prompt the user whether the  
// given item is found in the list or not. Note: Perform
// case insensitive search.  
// answer 14
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
    alert(userInput + " is available at index " + i + " in our bakery.");
} else {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}
// Question 15
    // Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// answer 15
var password = prompt("Enter your password");   
var passwordPattern = /^(?![0-9])[A-Za-z0-9]{6,}$/;
if (passwordPattern.test(password)) {
    alert("Password accepted.");
} else {
    alert("Invalid password. Password must contain alphabets and numbers, not start with a number, and be at least 6 characters long.");
}
// Question 16
    // Write a program to convert the following string
// to an array using string split method.
// var university = "University of Karachi";
// answer 16
var university = "University of Karachi";
var universityArray = university.split("");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");    
}   
// Question 17
    // Write a program to display the last character of a
// user input.
// answer 17
var userInput = prompt("Enter a string");
var lastChar = userInput.charAt(userInput.length - 1);
document.write("User input: " + userInput + "<br>");
document.write("Last character: " + lastChar);
// Question 18

    // You have a string "The quick brown fox jumps
// over the lazy dog". Write a program to count number of
// occurrences of word "the" in given string.   
// answer 18
var str = "The quick brown fox jumps over the lazy dog";
var lowerStr = str.toLowerCase();
var words = lowerStr.split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("Text: " + str + "<br>");
document.write("There are " + count + " occurrences of the word 'the'")
// asssaignment 21 to 25 end 



