// Assignment 1

// Function to perform basic arithmetic operations
function runCalculator() {
  // Prompt user for the first number and convert to float
  var num1 = parseFloat(prompt("Enter the first number:"));
  // Prompt user for the second number and convert to float
  var num2 = parseFloat(prompt("Enter the second number:"));
  // Prompt user for the operator
  var sign = prompt("Enter the operator (+, -, *, /, %):");

  var result; // Variable to store the result of the operation
  // Determine the operation based on the operator provided
  if (sign === "+") {
    result = num1 + num2; // Addition
  } else if (sign === "-") {
    result = num1 - num2; // Subtraction
  } else if (sign === "*") {
    result = num1 * num2; // Multiplication
  } else if (sign === "/") {
    result = num1 / num2; // Division
  } else if (sign === "%") {
    result = num1 % num2; // Modulus
  } else {
    alert("Invalid operator!"); // Alert for invalid operator
  }

  // Display the result of the operation
  alert(`${num1} ${sign} ${num2} = ${result}`);
}

// Assignment 2


// Function to calculate total marks and percentage for 5 courses
function runPercentageCalculator() {
  // Get valid marks for each course using the helper function
  var course1 = getValidMarks("Enter marks for course 1: out of 100");
  var course2 = getValidMarks("Enter marks for course 2: out of 100");
  var course3 = getValidMarks("Enter marks for course 3: out of 100");
  var course4 = getValidMarks("Enter marks for course 4: out of 100");
  var course5 = getValidMarks("Enter marks for course 5: out of 100");

  // Calculate total obtained marks
  var obtainedMarks = course1 + course2 + course3 + course4 + course5;
  var totalMarks = 500; // Total marks for all courses

  // Calculate percentage
  var percentage = (obtainedMarks * 100) / totalMarks;

  // Display total marks and percentage
  alert(`Your total marks: ${obtainedMarks}/100`);
  alert(`Your percentage: ${percentage}%`);
}

// Helper function to validate marks input
function getValidMarks(promptMessage) {
  var marks; // Variable to store the marks
  do {
    // Prompt for marks and convert to float
    marks = parseFloat(prompt(promptMessage));
    // Check if marks are valid (number between 0 and 100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Please enter a valid number between 0 and 100."); // Alert for invalid input
    }
  } while (isNaN(marks) || marks < 0 || marks > 100); // Repeat until valid input is provided
  return marks; // Return the valid marks
}
