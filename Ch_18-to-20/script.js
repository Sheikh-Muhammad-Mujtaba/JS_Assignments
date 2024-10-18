// assignment 18 , 19, 20

//  An empty array to hold the course names
var courses = []

// Get 5 course names from the user
for (var i = 1; i <= 5; i++) {
    var course = prompt(`Enter course ${i}:`, `Course ${i}`);
    courses.push(course);
}


// Print the entire courses array
alert(`Courses: ${courses.join(', ')}`);

// Prompt the user to edit the course name
for (var j = 0; j < courses.length; j++) {
    var editedCourse = prompt(`Edit Course ${j + 1} (Current: ${courses[j]}):`, courses[j]);

    // Check if the user entered a valid course name
    if (editedCourse !== null && editedCourse !== "") {
        courses.splice(j, 1, editedCourse); // Replace the old course name with the new one
    }
}




// Print the updated courses array
alert(`Updated Courses: ${courses.join(', ')}`);
