// QUESTION 1
        

// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Answer:1

var city = prompt("Enter city name:");  
if(city.toLowerCase() === "karachi"){
    alert("Welcome to city of lights");
}

// QUESTION 2
        

// Write a program to take gender   as input from user. If the
// user is  male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// Answer:2   

var userGender = prompt(" waht is your gender?");
if(Gendern.toLowerCase() === "male" )
{
    alert("Good Morning Sir");
}
// else if("Good Morning Ma’am");
// {
//     alert("Good Morning Ma’am");
// }
// else 
// {
//     alert("Good Morning Ma’am");
// }



// QUESTION 3
        
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// Answer:3

let signalColor = prompt("Enter traffic signal color (red, yellow, green):").toLowerCase();
if(signalColor === "red"){
    alert("Must Stop");
}           
else if(signalColor === "yellow"){   
    alert("Ready to move");
}
else if(signalColor === "green"){
    alert("Move now");
}
// QUESTION 4

// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// Answer:4

          alert ( " Please refill the fuel in your car");
         remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
        if(remainingFuel < 0.25)
        {
            alert("Please refill the fuel in your car");
        }

// QUESTION 5

// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
// b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
// d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// e. if (true){ alert("True"); } if (false){ alert("False"); }
// f. if("car" < "cat"){ alert("car is smaller than cat"); }

// Answer:5


a. var  = 4; if (++a === 5){ alert("given condition for variable a is true"); }
// // Output: Alert message will be displayed because ++a increments a to 5 before the comparison.
b. var  = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// // Output: Alert message will not be displayed because b++ returns 82 for the comparison, then increments b to 83.
c. var  = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
// // Output: "condition 1 is true" will not be displayed, "condition 2 is true" will be displayed, "condition 3 is true" will not be displayed, "condition 4 is true" will be displayed.
// d. var material Cost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// // Output: Alert message will be displayed because totalCost equals laborCost + materialCost.
e. if (true)
        { alert("True"); } if (false){ alert(" False"); }    
// // Output: "True" will be displayed, "False" will not be displayed.
// f. if("car" < "cat"){ alert("car is smaller than cat"); }
// Output: Alert message will be displayed because "car" is lexicographically smaller than "cat".




// QUESTION 6



// Write a program to take input the marks obtained in three    
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// Answer:6
let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));
let marksObtained = subject1 + subject2 + subject3;
let percentage = (marksObtained / totalMarks) * 100;
let grade, remarks; 
if(percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if(percentage >= 70){
    grade = "A";
    remarks = "Good";
}
else if(percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Mark Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");  
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// QUESTION 7

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// Answer:7

let secretNumber = Math.floor(Math.random() * 10) + 1; // Secret number between 1 and 10
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if(userGuess === secretNumber){
    alert("Bingo! Correct answer");
}
else if(userGuess + 1 === secretNumber || userGuess - 1 === secretNumber){
    alert("Close enough to the correct answer");
}   
else{   
    alert("Sorry, the correct number was " + secretNumber);
}

// QUESTION 8

// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// Answer:8

let numberToCheck = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if(numberToCheck % 3 === 0){
    alert(numberToCheck + " is divisible by 3");
}
else{
    alert(numberToCheck + " is not divisible by 3");
}

// QUESTION 9

// Write a program that checks whether the given input is an
// even number or an odd number.

// Answer:9

let numberToCheckEvenOdd = parseInt(prompt("Enter a number to check if it's even or odd:"));
if(numberToCheckEvenOdd % 2 === 0){
    alert(numberToCheckEvenOdd + " is an even number");
}       
else{
    alert(numberToCheckEvenOdd + " is an odd number");
}

// QUESTION 10

// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”  
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Answer:10

let temperature = parseFloat(prompt("Enter the temperature:"));
if(temperature > 40){
    alert("It is too hot outside.");
}
else if(temperature > 30){
    alert("The Weather today is Normal.");
}
else if(temperature > 20){
    alert("Today’s Weather is cool.");
}   

else if(temperature > 10){
    alert("OMG! Today’s weather is so Cool.");
}       

// QUESTION 11

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// Answer:11

let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if(operation === "+"){
    result = firstNumber + secondNumber;
}
else if(operation === "-"){
    result = firstNumber - secondNumber;
}
else if(operation === "*"){
    result = firstNumber * secondNumber;
}
else if(operation === "/"){
    if(secondNumber !== 0){
        result = firstNumber / secondNumber;
    }   
    else{
        result = "Error! Division by zero.";
    }
}
else if(operation === "%"){
    result = firstNumber % secondNumber;
}
else{
    result = "Invalid operation.";
}
alert("The result is: " + result);

// End of code  



















