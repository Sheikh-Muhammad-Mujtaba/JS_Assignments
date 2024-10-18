// First Assignment

// Take a decimal number input from the user
var userInput = parseFloat(prompt("Enter a decimal number:"));


// Convert the input to the next greater whole number
var roundedNumber = Math.ceil(userInput);


// Declare a variable of string and assign some text
var text = "We are learning JavaScript!";


// Slice the text from 0 to the rounded number
var sliceText = text.slice(0, roundedNumber);


// Use a for loop to reverse the sliced string
var reversedText = "";
for (var i = sliceText.length - 1; i >= 0; i--) {
    reversedText += sliceText[i]; // Concatenate each character in reverse order
}


// Print the reversed value in an alert
alert(reversedText);


//  Second Assignment
// Take input value from the user
var inputValue = prompt("Enter a sentence:", "cloUd naTive computinG");

// Convert every first letter of each word to uppercase
inputValue = inputValue
    .split(" ") // Split the string into an array of words
    .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter and make the rest lowercase
    })
    .join(" "); // Join the array back into a string


// Print the result in the console
console.log(inputValue);