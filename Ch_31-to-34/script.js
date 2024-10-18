// Get user input
var name = prompt("Enter your name:", "Abdullah");
var dobDate = prompt("Enter your date of birth (day):", "24");
var dobMonth = prompt("Enter your date of birth (month):", "05");
var dobYear = prompt("Enter your date of birth (year):", "1999");

// Create a Date object for the user's date of birth
var dob = new Date(dobYear, dobMonth - 1, dobDate); // Month is 0-indexed
var now = new Date(); // Current date and time
// console.log(now);

// Calculate age
var ageInMilliseconds = now - dob; // Age in milliseconds
var ageDate = new Date(ageInMilliseconds); // Convert to Date object
var ageYears = ageDate.getUTCFullYear() - 1970; // Get years
var ageMonths = ageDate.getUTCMonth(); // Get months
var ageDays = ageDate.getUTCDate() - 1; // Get days
var ageHours = now.getUTCHours(); // Get hours
var ageMinutes = now.getUTCMinutes(); // Get minutes
var ageSeconds = now.getUTCSeconds(); // Get seconds

// Print greetings based on the current time
var greeting;
var hours = now.getHours();

if (hours >= 0 && hours < 12) {
    greeting = "Good Morning";
} else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
} else if (hours >= 18 && hours < 21) {
    greeting = "Good Evening";
} else {
    greeting = "Good Night";
}


// Calculate age in days
var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

// Calculate time left until the next birthday
var nextBirthday = new Date(now.getFullYear() + 1, dobMonth - 1, dobDate); // Next birthday
if (nextBirthday < now) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1); // Adjust for next year if it's already passed this year
}
var timeLeft = nextBirthday - now; // Time left in milliseconds
var leftDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
var leftHours = new Date(timeLeft).getUTCHours();
var leftMinutes = new Date(timeLeft).getUTCMinutes();
var leftSeconds = new Date(timeLeft).getUTCSeconds();

// Output results
console.log(`Hello ${name}, ${greeting}`);
console.log(`Your DOB is ${dob.toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}`);
console.log(`You are ${ageYears} years, ${ageMonths} months, ${ageDays} days, ${ageHours} Hours, ${ageMinutes} Minutes, ${ageSeconds} Seconds old`);
console.log(`Your age in days: ${ageInDays}`);

if (leftDays <= 0 && leftHours <= 0 && leftMinutes <= 0 && leftSeconds <= 0) {
    console.log(`Happy Birthday ${name}. Today is your ${ageYears}th Birthday`);
} else {
    console.log(`How much time left for your next birthday? ${leftDays} days, ${leftHours} hours, ${leftMinutes} minutes, ${leftSeconds} seconds`);
}


