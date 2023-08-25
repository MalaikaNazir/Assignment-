"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
//Question 2
let personName = "Eric";
let message = `"Hello ${personName}, would you like to learn some Python Today?"`;
console.log(message);
//Question 3
let nameOfPerson = "Sir Jahanzaib Tayyab";
let lowercaseName = nameOfPerson.toLowerCase();
let uppercaseName = nameOfPerson.toUpperCase();
console.log("Lowercase Name ;", lowercaseName);
console.log("Uppercase Name;", uppercaseName);
//Question 4
let quote = '"Be good and you will be lonesome."';
console.log("Mark Twain said,", quote);
//Question 5
let famous_Person = "Mark Twain";
let messageTo = (`${famous_Person} said,"Be good and you will be lonesome."`);
console.log(messageTo);
//Question 6
let nameWithWhitespace = "nJohn tn";
console.log("Name with whitespace:", nameWithWhitespace);
let strippedName = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
//Question 7,8
console.log("_________________________");
console.log(4 + 4);
console.log("_________________________");
console.log(10 - 2);
console.log("_________________________");
console.log(4 * 2);
console.log("_________________________");
console.log(24 / 3);
console.log("_________________________");
//Question 9
const myFavNum = 2;
const messageIs = "My Favourite Number is" + " " + myFavNum;
console.log(messageIs);
//Question 10
//Comments
const myFavNumis = 2; //Malaika
const themessageIs = "My Favourite Number is" + " " + myFavNum; /*This is a multiline
comment*/
console.log(messageIs);
//Question 11
let namesOfFrendz = ["Monisss", "Mahmi", "Ghani"];
console.log(namesOfFrendz[0]);
console.log(namesOfFrendz[1]);
console.log(namesOfFrendz[2]);
//Question 12
let names_OfFrendz = ["Monisss", "Mahmi", "Ghani"];
console.log(`Hello, ${names_OfFrendz[0]}! How are you?`);
console.log(`Hello, ${names_OfFrendz[1]}! How are you?`);
console.log(`Hello, ${names_OfFrendz[2]}! How are you?`);
//Question 13
let Cars = ["Toyota", "Ford", "Tesla"];
console.log(`I would like to own a ${Cars[0]} car`);
console.log(`I would like to own a ${Cars[1]} car`);
console.log(`I would like to own a ${Cars[2]} car`);
//Question 14
let guestList = ["Sir Zia", "Sir Sajid", "Sir Abid Shirwani", "Sir Jahanzaib Tayyab ", "Sir Zakka"];
exports.guestList = guestList;
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName},You are invited to dinner please join us.`);
});
//Question 15
let guest_List = ["Sir Zia", "Sir Sajid", "Sir Abid Shirwani"];
//step 1 print the name of person who can't make it
let guestWhoCantMakeIt = "Sir Sajid";
console.log(`${guestWhoCantMakeIt} can't make it to dinner`);
//step 2 Replace the name of guest who can't make it 
let newGuest = "Sir Ahmad ";
let indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
//console.log(indexOfGuestWhoCantMakeIt)
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
}
//console.log(guestList[1])
//step 3 Print a second set of invitation messages
console.log("Print a second set of invitation messages");
guestList.forEach((guest) => {
    console.log(`Dear ${guest} You are invited to Dinner`);
});
//Question 16
let gues_tList = ["Sir Zia", "Sir Sajid", "Sir Abid Shirwani", "Sir Jahanzaib Tayyab ", "Sir Zakka"];
// print statement to the end of your program informing people that you found a bigger dinner table.
for (let guest of gues_tList) {
    console.log(`Hello ${guest},We have found a bigger dinner table`);
}
//step 2 Add new step at the beginning of the Array 
let newGuestAtBeginning = "Sir Ali";
gues_tList.unshift(newGuestAtBeginning);
console.log(gues_tList);
//step 3Add new step at the Middle of the Array 
let newGuestImiddle = "Sir Asim";
let middleIndex = Math.floor(gues_tList.length / 2);
gues_tList.splice(middleIndex, 0, newGuestImiddle);
console.log(gues_tList);
//step 4 use Append to add new guest at the end of your list
let newGuestAtEnd = "Sir Azhar";
gues_tList.push(newGuestAtEnd);
console.log(gues_tList);
//step 5 print a new set of invitation messages, one for each person in your list.
console.log(" new set of invitation messages, one for each person in your list");
gues_tList.forEach((guest) => {
    console.log(`Dear ${guest} You are invited to Dinner`);
});
//Question 17
let guestLis_t = [
    'Sir Ali',
    'Sir Zia',
    'Sir Sajid',
    'Sir Asim',
    'Sir Abid Shirwani',
    'Sir Jahanzaib Tayyab ',
    'Sir Zakka',
    'Sir Azhar'
];
//step 1 Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I can invite only two people for dinner.");
/*step 2  Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them know
 you’re sorry you can’t invite them to dinner*/
while (guestLis_t.length > 2) {
    let removeGuest = guestLis_t.pop();
    console.log(`Sorry!! ${removeGuest} , I can't invite you to dinner`);
}
/*step 3  Print a message to each of the two people still on your list, letting them know they’re
 still invited.*/
for (let guest of guestLis_t) {
    console.log(`Hello ${guest} ,you are still invited to Dinner!`);
}
/*step 4  Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program. */
guestLis_t.pop();
guestLis_t.pop();
// print empty string
console.log(`Guest list after dinner:`, guestLis_t);
//Question 18
//step 1 creat an array to store travel destinations 
let travelDestination = ["Tokyo", "Paris", "Madinah Munawara", "Caymn", "St Maartin"];
//step 2 Print your array in its original order
console.log("Original order");
console.log(travelDestination);
//step 3  Print your array in alphabetical order without modifying the actual list.
console.log("\n array in alphabetical order");
console.log([...travelDestination].sort());
//step 4 Show that your array is still in its original order by printing it.
console.log("\n Showing  array is still in its original order.");
console.log(travelDestination);
//step 5  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n array in reverse alphabetical order");
console.log([...travelDestination].sort().reverse());
//step 6  Show that your array is still in its original order by printing it again.
console.log("\n Showing  array is still in its original order.");
console.log(travelDestination);
//step 7 Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Revere order.");
travelDestination.reverse();
console.log(travelDestination);
//step 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to original.");
travelDestination.reverse();
console.log(travelDestination);
/*step 9 Sort your array so it’s stored in alphabetical order.
Print the array to show that its order has been changed.*/
console.log("\n Change to Alphabetical order.");
travelDestination.sort();
console.log(travelDestination);
/*step 10 Sort to change your array so it’s stored in reverse alphabetical order.
Print the list to show that its order has changed.*/
console.log("\n Change to  Reverse Alphabetical order.");
travelDestination.sort().reverse();
console.log(travelDestination);
/*Question 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */
//importing guest list from Question 15
console.log("Printing message indicating number of Guests.");
console.log(`We have finally invited ${guestList.length} guests in Exercise 15.`);
//Question 20 
/*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
 or anything else you’d like.Write a program that creates a list containing these items. */
const countries = ["USA", "Pakistan", "Australia", "Japan", "China"];
console.log("List of Countries:");
for (let country of countries) {
    console.log(country);
}
//Question 21
/* They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.*/
const bouquet = {
    name: "Spring Flowers",
    price: 250,
    description: "Beautiful arrangement of flowers",
};
//define an array of objects
let bouquets = [];
//Pushing multiple objects 
bouquets.push(bouquet);
bouquets.push({
    name: "Summer Bliss",
    price: 350,
    description: "Beautiful arrangement of summer flowers"
});
let bouquet3 = {
    name: "red hot",
    price: 450,
    description: "Beautiful arrangement of red roses",
};
bouquets.push(bouquet3);
bouquets.push({
    name: "Freshness",
    price: 550,
    description: "Beautiful arrangement of white and yellow flowers",
});
console.log(bouquets);
//Function to display bouquets 
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
   Title: ${i.name}
    description: ${i.description}
    price: ${i.price}
    ______________________________\n `);
    }
}
displayBouquets(bouquets);
//Question 22
/*Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen.Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program. */
// function to creat a fruit object
function creatFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
//create an array of fruits
const fruits = [
    creatFruit("Apple", "red", "sweet"),
    creatFruit("Banana", "yellow", "sweet"),
    creatFruit("Orange", "orange", "sweet"),
    creatFruit("Pineapple", "red", "sweet"),
    creatFruit("Mango", "red", "sweet"),
];
//Access an invalid index
const invalidIndex = 10; //Invalid index
console.log(`fruits at invalid index ${invalidIndex}`, fruits[invalidIndex]);
//print the fruits
fruits.forEach((fruit) => {
    console.log(`name: ${fruit.name} ,color: ${fruit.color},taste: ${fruit.taste}`);
});
//Question 23
/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for
 the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')*/
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
console.log("Is car' === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
console.log("Is car' === 'Subaru'? I predict True.");
console.log(car === 'Subaru'); // False
console.log("Is car' !== 'toyota'? I predict True.");
console.log(car === 'toyota'); // True
console.log("Is car' !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru'); // True
console.log("Is car' !== 'mazda'? I predict True.");
console.log(car !== 'mazda'); // True
let age = 25;
console.log("Is age > 18? I predict True.");
console.log(age > 18); // True
console.log("Is age < 21? I predict False.");
console.log(age < 21); // False
//Question 24
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equalityand inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
z Test whether an item is not in a array
 */
// Tests for equality and inequality with strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true
// Test using the lower case function
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); // true
//Numerical tests involving equalityand inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
//Tests using "and" and "or" operators
// Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); // true, both conditions are true
console.log(x < y || y > z); // true, at least one condition is true
console.log(x > y && y < z); // false, both conditions are false
console.log(x > y || y > z); // false, both conditions are false 
// Test whether an item is in an array
const fruit_s = ['apple', 'banana', 'orange', 'grapes'];
console.log(fruit_s.includes('banana')); // true 
console.log(fruit_s.includes('kiwi')); // false
// Test whether an item is not in an array 
const colors = ['red', 'green', 'blue', 'yellow'];
console.log(!colors.includes('purple')); // true 
console.log(!colors.includes('green')); // false
//Question 25
/*
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('You just earned 5 points');
}
//second version 
alien_color = 'blue';
if (alien_color === 'green') {
    console.log('You just earned 5 points');
}
//Question 26
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
// version 1 runs the if block
let alienColor = 'green';
if (alienColor === 'green') {
    console.log("Congratulation! You just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulation! You just earned 10 points for shooting the alien");
}
// version 2 runs the else block
alienColor = 'blue';
if (alienColor === 'green') {
    console.log("Congratulation! You just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulation! You just earned 10 points for shooting the alien");
}
//Question 27
//version 1 Where Alien color is green 
console.log("1st version When Alien color is green");
let alien_Color = 'green';
if (alien_Color === 'green') {
    console.log("Congratulation! You just earned 5 points for shooting the alien");
}
else if (alien_Color === 'yellow') {
    console.log("Congratulation! You just earned 10 points for shooting the alien");
}
else if (alien_Color === 'red') {
    console.log("Congratulation! You just earned 15 points for shooting the alien");
}
else {
    console.log("Unknown alien color");
}
//Version 2 Where Alien Color is Yellow
console.log("2nd version When Alien color is yellow");
alien_Color = 'yellow';
if (alien_Color === 'green') {
    console.log("Congratulation! You just earned 5 points for shooting the alien");
}
else if (alien_Color === 'yellow') {
    console.log("Congratulation! You just earned 10 points for shooting the alien");
}
else if (alien_Color === 'red') {
    console.log("Congratulation! You just earned 15 points for shooting the alien");
}
else {
    console.log("Unknown alien color");
}
//Version 3 Where Alien Color is Red
console.log("3rd version When Alien color is red");
alien_Color = 'red';
if (alien_Color === 'green') {
    console.log("Congratulation! You just earned 5 points for shooting the alien");
}
else if (alien_Color === 'yellow') {
    console.log("Congratulation! You just earned 10 points for shooting the alien");
}
else if (alien_Color === 'red') {
    console.log("Congratulation! You just earned 15 points for shooting the alien");
}
else {
    console.log("Unknown alien color");
}
//Question 28
/* Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
// less than 2 years old, print a message that the person is a baby.
let age_ = 19;
if (age_ < 2) {
    console.log(`Age is ${age_}, The person is a baby.`);
}
else if (age_ < 4) {
    console.log(`Age is ${age_}, The person is a toddler.`);
}
else if (age_ < 13) {
    console.log(`Age is ${age_}, The person is a kid.`);
}
else if (age_ < 20) {
    console.log(`Age is ${age_}, The person is a teenager.`);
}
else if (age_ < 65) {
    console.log(`Age is ${age_}, The person is an adult.`);
}
else {
    console.log(`Age is ${age_}, The person is an elder.`);
}
// to test wiht difrent age
console.log("Test with different age");
age_ = 75;
if (age_ < 2) {
    console.log(`Age is ${age_}, The person is a baby.`);
}
else if (age_ < 4) {
    console.log(`Age is ${age_}, The person is a toddler.`);
}
else if (age_ < 13) {
    console.log(`Age is ${age_}, The person is a kid.`);
}
else if (age_ < 20) {
    console.log(`Age is ${age_}, The person is a teenager.`);
}
else if (age_ < 65) {
    console.log(`Age is ${age_}, The person is an adult.`);
}
else {
    console.log(`Age is ${age_}, The person is an elder.`);
}
//Question 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
//Define Array of fruits 
let favorite_fruits = ["apple", "orange", "Banana",];
//Check if a certain kind of fruit is in your array
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango!");
}
//Question 30
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
const userName = ["admin", "Muhammad Ali", "Muhammad Azhar", "Muhammad Asim", "Muhammad Asif"];
for (const i in userName) {
    if (userName[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + userName[i] + ", thank you for logging in again.");
    }
}
//Question 31
/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed*/
//Non empty array case 
let userNames = ["admin", "Muhammad Ali", "Muhammad Azhar", "Muhammad Asim", "Muhammad Asif"];
//functional case
function greetUsers(usernames) {
    if (usernames.length == 0) {
        console.log("We need to find some users!");
        return;
    }
    for (const username of userNames) {
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello  ${username} , thank you for logging in again.`);
        }
    }
}
console.log(`For non empty username:\n`);
greetUsers(userNames);
// to make array empty we just assingn empty array to username
userNames = [];
console.log("for empty user name");
greetUsers(userNames);
//Question 32
/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/
//step 1 
const current_users = ["Kamran", "Ali", "Burhan", "Assad", "Asif", "Ahmed"];
const new_users = ["asif", "kamRan", "Hassan", "Eshal", "ali"];
//step 2
function checkUserNames(current_users, new_users) {
    const lowercasedCurrentUsers = current_users.map(x => x.toLowerCase());
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`The username ${newUser} has already been used!`);
        }
        else {
            console.log(`The username ${newUser} is available!`);
        }
    }
}
checkUserNames(current_users, new_users);
//Question 33
/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (const number of Numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
//Question 34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.*/
//Define an array of favourite pizza 
const favouritePizzas = ["pepperoni", "Margherita", "BBQ Chicken"];
//Print the name of each pizza using for loop
console.log("My favourite pizzas are:");
for (let i = 0; i < favouritePizzas.length; i++) {
    console.log(favouritePizzas[i]);
}
//print a sentence for each favourite pizza
console.log("\nMy favourite pizzas are:");
for (let i = 0; i < favouritePizzas.length; i++) {
    console.log(`I like ${favouritePizzas[i]} Pizza!`);
}
//Print additional sentence about how much i like pizza
console.log("\n I really Love Pizzas!");
//Question 35
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!  */
//List of animals with common characteristics
const animals = ["cat", "dog", "goat"];
//Print the name of each animal using for loop
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
//print a statement about each animal
console.log("Statement about each animal:");
for (const animal of animals) {
    if (animal === "dog") {
        console.log(`A ${animal} would make a great pet!`);
    }
    else if (animal === "goat") {
        console.log(`A ${animal} would be a great companion at home`);
    }
    else if (animal === "cat") {
        console.log(`A ${animal} is an adorable pet also givs us milk!`);
    }
}
//common Characteristics
console.log("What these animals have in common:");
console.log("Any of these animals could be a great pet!");
//Question 36
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
const make_shirt = (size, message) => console.log(`size: ${size} , message:${message}`);
//call the function
let size = "Medium";
let messageis = "Typescript Insights";
make_shirt(size, messageis);
make_shirt("Large", "Learning Typescript ");
//Question 37
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message*/
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}
//Large shirt with default message 
makeShirt(); // Output: Size: Large, Message: 'I love TypeScript'
//  Medium shirt with default 
makeShirt("Medium"); // Output: Size: Medium, Message: 'I love TypeScript'
//  Custom shirt with a different message and size
makeShirt("Small", "Hello, TypeScript!"); // Output: Size: Small, Message: 'Hello, TypeScript!'
//Question 38
/* Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
function describe_city(city, country = "default country") {
    console.log(`${city} is in ${country}`);
}
//calling function 
describe_city("karachi", "Pakistan");
describe_city("New York"); //
describe_city("Berlin", "Germany");
//Question 39
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned. */
//Arrow function 
const city_country = (city, country) => {
    return `${city}, ${country}`;
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo,", "Japan"));
console.log(city_country("New york", "USA"));
//Question 40
/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store
 the number of tracks on an album. If the calling line includes a value for the number of tracks,add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */
function make_album(artist, title, track) {
    const album = {
        artist,
        title,
        track
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
const album1 = make_album("Artist 1", "Album1");
const album2 = make_album("Artist 2", "Album2");
const album3 = make_album("Artist 3", "Album3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
//Question 41
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
const magicianNames = ["Harry porter", "David copperfield", "Hermioni Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
//Call the function
show_magicians(magicianNames);
//Question 42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified */
//Question 43
/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `The great ${magician}`);
    return greatMagicians;
}
const greatMagiciansNames = make_great(magicianNames);
//calling the original function 
console.log("Original Magicians:");
console.log(magicianNames);
//calling the great magicians
console.log("Great Magicians:");
console.log(greatMagiciansNames);
//Question 44
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time*/
function makeSandwiches(...items) {
    console.log("Sandwiches summary:");
    if (items.length === 0) {
        console.log("-You ordered an empty sanwich.please add some items");
    }
    else {
        items.forEach((item, i) => {
            console.log(`-${i + 1}. ${item}`);
        });
        console.log("\n");
    }
}
makeSandwiches();
makeSandwiches("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwiches("Ham", "Cheese");
makeSandwiches("Peanut Butter", "Jelly", "Banana", "Honey");
//Question 45
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
// Example usage:
const myCar = createCar("Toyota", "Corolla", ["color", "red"], ["optionalFeature", "sunroof"]);
console.log(myCar);
