// ..................... Start of assignment 6.................
// Chapter # 6-9

// Question 1
// Write a program to take a number in a iable, do the
// required arithmetic to display the following result in your
// browser:

// Answrer:
let a = 10;

document.write("The value of a is: " + a + "<br>");
document.write("..........................................." + "<br><br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("..........................................." + "<br><br>");
// Question 2
// What will be the output in iables a, b & result after
// execution of the following script:
//  a = 2, b = 1;
//  result = --a - --b + ++b + b--;
// Explain the output at each stage:    
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// Answer:
a = 2;
let b = 1;
let result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");
document.write("Explanation:" + "<br>");
document.write("--a is: " + (--a) + "<br>");
document.write("--a - --b is: " + (--a - --b) + "<br>");
document.write("--a - --b + ++b is: " + (--a - --b + ++b) + "<br>");
document.write("--a - --b + ++b + b-- is: " + (--a - --b + ++b + b--) + "<br>");
document.write("..........................................." + "<br><br>");
// Question 3
// Write a program that takes input a name from user &
// greets the user.
// Answer:  
var userName = prompt("Enter your name:");
alert("Hello " + userName + ", Welcome to our website!");
document.write("..........................................." + "<br><br>");
// Question 5   
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If    
// user does not enter a new number, multiplication table of
// 5 should be displayed by default.
// Answer:
var num = +prompt("Enter a number to show its multiplication table:", 5);
document.write("Multiplication table of " + num + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
document.write("..........................................." + "<br><br>");
// Question 6
// Take a) Take three subjects name from user and store them in 3
// different variables. 
// b) Total marks for each subject is 100, store it in another
// variable. 
// c) Take obtained marks for first subject from user and   
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user        
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// Answer:
var sub1 = prompt("Enter name of first subject:");
var sub2 = prompt("Enter name of second subject:");
var sub3 = prompt("Enter name of third subject:");
var totalMarks = 100;

var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");
var obtainedMarks = marks1 + marks2 + marks3;
percentage = (obtainedMarks / (totalMarks * 3)) * 100;
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + obtainedMarks + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");
document.write("..........................................." + "<br><br>");

//..................... End of assignment 6...............

