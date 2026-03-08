// User profile variables

let userName = "Chigozie";
let age = 28;
let isStudent = true;
let height = 1.75;
let hobbies = ["coding", "reading", "football"];
let address = null;
let phoneNumber;

// Profile object (alternative structured approach)
const userProfile = {
    name: userName,
    age: age,
    isStudent: isStudent,
    height: height,
    hobbies: hobbies,
    address: address,
    phoneNumber: phoneNumber
};

console.log(userProfile);
let result2 = "5" - 2;
console.log(result2);       // 3
console.log(typeof result2); // number
console.log(Boolean(0));     // false
console.log(Boolean(1));     // true
console.log(Boolean(""));    // false
console.log(Boolean("hello"));// true

let userProfile = `User Profile:
Name: ${userName}
Age: ${age}
Student: ${isStudent}
Height: ${height} meters`;

console.log(userProfile);

let userName = "Chigozie";
let age = 28;
let isStudent = true;
let height = 1.75;

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof height);

let coercionExample = "10" + 5;
console.log(coercionExample);

let profile = `Hello, my name is ${userName}. I am ${age} years old.`;

console.log(profile);
