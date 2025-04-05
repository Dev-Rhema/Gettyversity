// const country = "Nigeria"
// const continent = "Africa"
// let nigeriaPopulation = 30000000
// let finlandPopulaton= 6000000
// const isIsland = false
// let language = "English"
// let averagePopulation=33000000

// console.log(country)
// console.log(continent)
// console.log(nigeriaPopulation)
// console.log(isIsland)
// console.log(language)

// let halfPopulation = nigeriaPopulation/2
// console.log(halfPopulation)

// // 15000000 people would live in half the country

// nigeriaPopulation++
// console.log(nigeriaPopulation)

// const higherPopulation= finlandPopulaton>nigeriaPopulation? "finland is more populated" : "Nigeria is more populated"
// console.log(higherPopulation)

// const averageCountryPopulation= averagePopulation>nigeriaPopulation? "The average country is more populated" : "Nigeria is more populated"
// console.log(averageCountryPopulation)

// let X = 10;
// let Y  = 2;

// X =Y
// X += Y
// X -= Y
// X /= Y
// X %= Y

// let description =  country  + " is in " + continent +" and its " + nigeriaPopulation + " people speak " + language+"."

// let newDescription = `${country} is ${continent} and its ${nigeriaPopulation} people speak ${language}`

// console.log(description)
// console.log(newDescription)

// let balance = 500;
// const correctPin = "1234";
// let pinAttempts = 3;

// while (pinAttempts > 0) {
//     let enteredPin = prompt("Please enter your PIN:");
//     if (enteredPin === correctPin) {
//         while (true) {
//             let action = prompt("Enter 'withdraw', 'deposit', or 'exit':");
//             if (action === "withdraw") {
//                 let amount = parseFloat(prompt("Enter the amount to withdraw:"));
//                 if (isNaN(amount)) {
//                     console.log("Please input number");
//                 } else if (amount <= 0) {
//                     console.log("Invalid amount entered.");
//                 } else if (amount > balance) {
//                     console.log("Insufficient funds.");
//                 } else {
//                     balance -= amount;
//                     console.log(`New balance: $${balance}`);
//                 }
//             } else if (action === "deposit") {
//                 let amount = parseFloat(prompt("Enter the amount to deposit:"));
//                 if (isNaN(amount)) {
//                     console.log("Please input number");
//                 } else if (amount <= 0) {
//                     console.log("Invalid amount entered.");
//                 } else {
//                     balance += amount;
//                     console.log(`New balance: $${balance}`);
//                 }
//             } else if (action === "exit") {
//                 console.log("Goodbye!");
//                 break;
//             } else {
//                 console.log("Invalid action.");
//             }
//         }
//         break;
//     } else {
//         pinAttempts--;
//         if (pinAttempts > 0) {
//             console.log(`Incorrect PIN. ${pinAttempts} attempts left.`);
//         } else {
//             console.log("Account locked.");
//         }
//     }
// }


const sentence = "The quick brown fox jumps over the lazy dog";
const extractedWord = sentence.slice(10, 15).toUpperCase();
const newSentence = sentence.replace("lazy ", "").replace("dog", extractedWord);
console.log(newSentence); // Output: "The quick BROWN fox jumps over the BROWN"

const email = "Student.Name@SchoolDomain.com";
const domain = email.split('@')[1].toLowerCase();
const username = email.split('@')[0].toUpperCase();
const formattedEmail = `${username}@${domain}`;
console.log(formattedEmail); // Output: "STUDENT.NAME@schooldomain.com"


const messyString = " Too many spaces here. ";
const trimmedString = messyString.trim();
const length = trimmedString.length;
const substring = trimmedString.slice(4, length - 4);
console.log(trimmedString); // Output: "Too many spaces here."
console.log(length); // Output: 21
console.log(substring); // Output: "many spaces h"


const phrase = "I like to code in JavaScript. JavaScript is fun!";
const substringPhrase = replacedPhrase.slice(9, 29);
console.log(substringPhrase); // Output: "CODE IN JS. JS IS F"


const text = "Programming is highly rewarding";
const charAt10 = text.charAt(9);
const unicodeValue = charAt10.charCodeAt(0);
const slicedText = replacedText.slice(7, 27);
console.log(charAt10); // Output: "a"
console.log(unicodeValue); // Output: 97
console.log(slicedText); // Output: "rammin97 is hi97hly re"


const firstName = "Jane";
const middleName = "Marie";
const lastName = "Smith";
const fullName = `${firstName} ${middleName} ${lastName}`.toUpperCase();
const indexOfM = fullName.indexOf('M');
const replacedName = fullName.replace("MARIE", "ANN");
console.log(fullName); // Output: "JANE MARIE SMITH"
console.log(indexOfM); // Output: 5
console.log(replacedName); // Output: "JANE ANN SMITH"
         

const statement = "JavaScript is a versatile and popular programming language";
const startsWithJavaScript = statement.startsWith("JavaScript");
const endsWithLanguage = statement.endsWith("language");
const replacedStatement = statement.replace("versatile", "powerful").toLowerCase();
console.log(startsWithJavaScript); // Output: true
console.log(endsWithLanguage); // Output: true
console.log(replacedStatement); // Output: "javascript is a powerful and popular programming language"


const description = "Backend development involves working with databases, servers, and APIs";
const substringDescription = description.slice(36).toLowerCase();
const arrayDescription = substringDescription.split(", ");
const joinedStringDescription = arrayDescription.join(" & ");
console.log(substringDescription); // Output: "databases, servers, and apis"
console.log(arrayDescription); // Output: ["databases", "servers", "and apis"]
console.log(joinedStringDescription); // Output: "databases & servers & and apis"


const announcement = "Join the new online coding bootcamp now";
const wordsArray = announcement.split(" ");
const lengthsArray = wordsArray.map(word => word.length);
const lengthsString = lengthsArray.join(",");
const indexOfFive = lengthsArray.indexOf(5);
console.log(wordsArray); // Output: ["Join", "the", "new", "online", "coding", "bootcamp", "now"]
console.log(lengthsArray); // Output: [4, 3, 3, 6, 6, 8, 3]
console.log(lengthsString); // Output: "4,3,3,6,6,8,3"
console.log(indexOfFive); // Output: -1 (since there is no word with length 5)


const feedback = "This course is simply amazing. This course is simply comprehensive.";
const slicedFeedback = replacedFeedback.slice(4, 54);
const arrayFeedback = slicedFeedback.split(" ");
console.log(slicedFeedback); // Output: " PROGRAM IS SIMPLY AMAZING. THIS PROGRAM IS SIMPLY"
console.log(arrayFeedback); // Output: ["PROGRAM", "IS", "SIMPLY", "AMAZING.", "THIS", "PROGRAM", "IS", "SIMPLY"]