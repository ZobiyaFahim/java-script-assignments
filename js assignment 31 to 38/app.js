// js assignment 31 to 34...........
// question 1
// 1. Write a program that displays current date and time in
// your browser.
var currentDate = new Date();
document.write("Current date and time: " + currentDate + "<br><br>");   
// question 2
// 2. Write a program that alerts the current month in words.
// For example December.
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var currentMonthIndex = currentDate.getMonth();
var currentMonthName = monthNames[currentMonthIndex];
alert("Current month: " + currentMonthName);
// question 3
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.
var dayNames = [    
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];
var currentDayIndex = currentDate.getDay();
var currentDayName = dayNames[currentDayIndex]; 
alert("Today is: " + currentDayName);
// question 4
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
if (currentDayIndex === 0 || currentDayIndex === 6) {
    alert("It's Fun day");
}   
// question 5
// 5. Write a program that shows the message “First fifteen days of
// the month” if the date is less than 16th of the month else
// shows “Last days of the month”.
var currentDateOfMonth = currentDate.getDate();
if (currentDateOfMonth < 16) {
    document.write("First fifteen days of the month<br><br>");
}
else {
    document.write("Last days of the month<br><br>");
}
// question 6
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to
// represent the Date object.
var millisecondsSince1970 = currentDate.getTime();  
var minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970 + "<br><br>");
// question 7
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var currentHour = currentDate.getHours();
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
// question 8
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.   
var laterDate = new Date(2020, 11, 31);                             
document.write("Later date: " + laterDate + "<br><br>");
// question 9
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
var ramadanStartDate = new Date("April 13, 2021");
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write(daysPassed + " days have passed since 1st Ramadan, 2021<br><br>");
// question 10
// 10. Write a program that displays in your browser the    
// seconds that elapsed between the reference date and the
// beginning of 2015.
var referenceDate = new Date("December 5, 2015");
var beginningOf2015 = new Date("January 1, 2015");
var secondsElapsed = Math.floor((referenceDate - beginningOf2015) / 1000);
document.write("Seconds that elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds<br><br>");
// question 11  
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var currentDateTime = new Date();
var currentHours = currentDateTime.getHours();
currentDateTime.setHours(currentHours + 1); 
document.write("Current date and time after adding one hour: " + currentDateTime + "<br><br>");
// question 12
// 12. Write a program that creates a date object and show the  
// date in an alert box that is reset to 100 years back?
var dateObject = new Date();
var currentYear = dateObject.getFullYear();
dateObject.setFullYear(currentYear - 100);
alert("Date 100 years back: " + dateObject);
// question 13
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
var userAge = prompt("Enter your age:");
var birthYear = currentDate.getFullYear() - parseInt(userAge);

document.write("Your birth year is: " + birthYear + "<br><br>");    
// question 14
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
var customerName = prompt("Enter customer name:");
// b. Current Month
var currentMonth = monthNames[currentMonthIndex];
// c. Number of units
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
// d. Charges per unit
var chargesPerUnit = 16; // Assuming a fixed rate per unit
// e. Net Amount Payable (within Due Date)
var netAmountPayable = numberOfUnits * chargesPerUnit;
// f. Late Payment Surcharge

var latePaymentSurcharge = 350; // Assuming a fixed late payment surcharge
// g. Gross Amount Payable (after Due Date)
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Current Month: <b>" + currentMonth + "</b><br>");
document.write("Number of Units: <b>" + numberOfUnits.toFixed(2) + "</b><br>");

document.write("Charges per Unit: <b>" + chargesPerUnit.toFixed(2) + "</b><br><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmountPayable.toFixed(2) + "</b><br>");
document.write("Late Payment Surcharge: <b>" + latePaymentSurcharge.toFixed(2) + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmountPayable.toFixed(2) + "</b><br>");
// End of js assignment 31 to 34...........


              











