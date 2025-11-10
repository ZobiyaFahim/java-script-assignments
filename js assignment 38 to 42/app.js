// assignments 38 to 42
// questions 1 
// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// answer 1
function power(a, b) {
    return Math.pow(a, b);
}   
console.log(power(2, 3)); // Output: 8

// questions 2
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...
// answer 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2020)); // Output: true

// questions 3
// 3. If the lengths of the sides of a triangle are denoted by a, b, and c,
// then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where S = (a + b + c) / 2
// Write a function that takes the lengths of the three sides of a triangle
// as arguments and returns the area of the triangle.
// answer 3
function triangleArea(a, b, c) {
    var S = (a + b + c) / 2;
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}   
console.log(triangleArea(3, 4, 5)); // Output: 6

// questions 4
// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these marks.
// answer 4
function calculateAverageAndPercentage(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    var average = totalMarks / 3;
    var percentage = (totalMarks / 300) * 100;
    return { average: average, percentage: percentage };
}
console.log(calculateAverageAndPercentage(85, 90, 95)); // Output: { average: 90, percentage: 90 }
// questions 5
// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code for
// single character as of now.
// answer 5
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }   
    }
    return -1;
}
console.log(customIndexOf("hello", "e")); // Output: 1
// questions 6
// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// answer 6
function deleteVowels(sentence) {   
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
console.log(deleteVowels("This is a sample sentence.")); // Output: "Ths s  smpl sntnc."

// questions 7      
// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// "Pleases read this application and give me gratuity"
// Such occurrences are ea, ea, ui
// answer 7
function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < text.length - 1; i++) {
        if (vowels.indexOf(text[i]) !== -1 && vowels.indexOf(text[i + 1]) !== -1) {
            count++;
        }   
    }
    return count;
}
console.log(countSuccessiveVowels("Pleases read this application and give me gratuity")); // Output: 3

// questions 8
// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this distance
// in meters, feet, inches and centimeters.
// answer 8
function convertDistance(km) {
    var meters = km * 1000;
    var feet = km * 3280.84;
    var inches = km * 39370.1;
    var centimeters = km * 100000;
    return {
        meters: meters,
        feet: feet,
        inches: inches,
        centimeters: centimeters
    };
}
console.log(convertDistance(5)); // Output: { meters: 5000, feet: 16404.2, inches: 196850.5, centimeters: 500000 }
// questions 9
// 9. Write a function to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work for
// fractional part of an hour.
// answer 9
function calculateOvertimePay(hoursWorked) {
    var overtimeRate = 12.00;
    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        return overtimeHours * overtimeRate;
    } else {
        return 0;
    }
}
console.log(calculateOvertimePay(45)); // Output: 60
// questions 10
// 10. A cashier has currency notes of denominations 100, 50 and 10.
// If the amount to be withdrawn is input through the keyboard in
// hundreds, find the total number of currency notes of each
// denomination the cashier will have to give to the withdrawer.    

// answer 10
function calculateCurrencyNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    amount %= 100;  
    var fifties = Math.floor(amount / 50);
    amount %= 50;   
    var tens = Math.floor(amount / 10);
    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}
console.log(calculateCurrencyNotes(760)); // Output: { hundreds: 7, fifties: 1, tens: 1 }

// end of assignments 38 to 42




















