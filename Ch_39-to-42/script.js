// Get marks for 5 courses from the user
var course1 = parseFloat(prompt("Enter marks for Course 1 (out of 100):"));
var course2 = parseFloat(prompt("Enter marks for Course 2 (out of 100):"));
var course3 = parseFloat(prompt("Enter marks for Course 3 (out of 100):"));
var course4 = parseFloat(prompt("Enter marks for Course 4 (out of 100):"));
var course5 = parseFloat(prompt("Enter marks for Course 5 (out of 100):"));

// Calculate total obtained marks
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var totalMarks = 500; // Maximum possible marks

// Calculate percentage
var percentage = (obtainedMarks * 100) / totalMarks;

// Initialize grade variable
var grade;

// Determine grade using switch case
switch (true) {
  case (percentage >= 90 && percentage <= 100):
    grade = "A+";
    break;
  case (percentage >= 75 && percentage < 90):
    grade = "A";
    break;
  case (percentage >= 60 && percentage < 75):
    grade = "B";
    break;
  case (percentage >= 45 && percentage < 60):
    grade = "C";
    break;
  case (percentage >= 30 && percentage < 45):
    grade = "D";
    break;
  case (percentage >= 0 && percentage < 30):
    grade = "F";
    break;
  default:
    grade = "Invalid percentage";
}

// Display the results using alert
alert(
  "Obtained Marks: " + obtainedMarks + "\n" +
  "Percentage: " + percentage.toFixed(2) + "%" + "\n" +
  "Grade: " + grade
);
