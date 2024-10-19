// Assignment 1


var inputValue = prompt("Enter a sentence:", "cloUd naTive computinG");

function capitalizeWords(inputValue) {
    return inputValue
        .split(" ") // Split the string into an array of words
        .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter and make the rest lowercase
        })
        .join(" ");
}

const capitalizedValue = capitalizeWords(inputValue);
console.log(capitalizedValue);


// Second Assignment


function factorialize(num) {
    // if the number is 0 or 1, the factorial is 1
    if (num === 0 || num === 1) {
        return 1;
    }

    //  multiply the number by the factorial of the previous number
    return num * factorialize(num - 1);
}

// Get user input as a number
const userInput = parseInt(prompt("Enter a number to factorialize:"), 10);

// Call the factorialize function and store the result
const result = factorialize(userInput);

// Print the result in the console
console.log(result);

















