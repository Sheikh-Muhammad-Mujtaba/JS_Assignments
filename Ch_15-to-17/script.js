// assignment 15, 16, 17

//  An empty array to hold the course names
var courses = []

// Get 5 course names from the user
var course1 = prompt("course 1", "Excel");
courses.push(course1);
var course2 = prompt("course 2", "AI");
courses.push(course2);
var course3 = prompt("course 3", "SEO");
courses.push(course3);
var course4 = prompt("course 4", "Programming");
courses.push(course4);
var course5 = prompt("course 5", "Graphic Designing");
courses.push(course5);


// Print the entire courses array
alert(`Courses: ${courses.join(', ')}`);

// Prompt the user to edit the course name
var editedCourse = prompt(`Edit Course 1 (Current: ${courses[0]}):`, courses[0]);
if (editedCourse !== null && editedCourse !== "") {
    courses.splice(0, 1, editedCourse);
}

var editedCourse = prompt(`Edit Course 2 (Current: ${courses[1]}):`, courses[1]);
if (editedCourse !== null && editedCourse !== "") {
    courses.splice(1, 1, editedCourse);
}

var editedCourse = prompt(`Edit Course 3 (Current: ${courses[2]}):`, courses[2]);
if (editedCourse !== null && editedCourse !== "") {
    courses.splice(2, 1, editedCourse);
}

var editedCourse = prompt(`Edit Course 4 (Current: ${courses[3]}):`, courses[3]);
if (editedCourse !== null && editedCourse !== "") {
    courses.splice(3, 1, editedCourse);
}

var editedCourse = prompt(`Edit Course 5 (Current: ${courses[4]}):`, courses[4]);
if (editedCourse !== null && editedCourse !== "") {
    courses.splice(4, 1, editedCourse);
}





// Print the updated courses array
alert(`Updated Courses: ${courses.join(', ')}`);
