// Arrays are like strings
// Strings are like arrays

// They both have an index
// They both have length

// Some differences...
// Strings can only hold characters
// Arrays can hold characters too, but also anything else

let string1 = "elephant";
// The chars at index 5, 6 and 7 spell ant.
let ant = string1[5] + string1[6] + string1[7];
console.log(`${ant} is a word in ${string1}`);

// An array can contain strings
// Example
let array1 = ["aardvark", "buffalo", "cat", "dingo"];
let buffalo = array1[1];
console.log(`${buffalo} is the second element in the array.`);

// Example
// find the animal with the longest name
let longestName = array1[0];
console.log(`${longestName} has the longest name.`);

// TODO: find the animal with the shortest name.

// Difference:
// strings are immutable. They can't be altered.
// arrays are mutable. The can be altered.
// Note: mutable comes from the word "mutation"

// Example of immutable string
console.log("**** Immutable Strings ****");
let string2 = "giraffe";
// can't do this (replace g with G)
string2[0] = "G";
console.log(string2); // string2 is still "giraffe"

// Example of mutable array
console.log("**** Mutable Arrays ****");
let zooAnimals = ["elephant", "walrus", "kitten", "dairy cow", "girrafe"];
// can do this (replace kitten with lion):
zooAnimals[2] = "lion";
console.log(zooAnimals); // now contains lion
// TODO: change "dairy cow" to a more approriate animal for a zoo. Use console.log to show the change in the array.

// Strings are created fully formed.
// Arrays can be built and changed.
console.log("**** Array.push() method ****");
zooAnimals.push("wolf"); // push() adds to the end
zooAnimals.push("tiger"); // push() adds to the end
console.log(zooAnimals);
// TODO: add two more animals using the push method

// Example: You can take a substring of a string
console.log("**** String.substring ****");
let string3 = "aardvark";
let string4 = string3.substring(5, 8);
console.log(`${string4} is in ${string3}`);

// Example: you can take a slice of an array
console.log("**** Array.slice ****");
let twoAnimals = zooAnimals.slice(2, 4);
console.log(twoAnimals);

// TODO: take a substring of the word
console.log("**** TODO: String.substring ****");
let string5 = "panther";

// TODO: take an slice of an array.
console.log("**** TODO: String.substring ****");
let domesticAnimals = ["dog", "cat", "goat", "chicken", "cow"];

// Practice
console.log("**** TODO: Practice ****");
let zooAnimals2 = [
  "elephant",
  "walrus",
  "lion",
  "leopard",
  "girrafe",
  "wolf",
  "tiger",
];
// TODO: in zooAnimals2, replace all the animals with names longer than 6 characters with animals with shorter names. Log it to the console.

// TODO: Now replace all animals with an "i" in their name to a different animal. Log it to the console.

// Let's try something slightly different.

// Instead of changing the array, we will
// take items from the array and create a new
// array from those items.

let countries1 = [
  "United States",
  "Canada",
  "Mexico",
  "Guatemala",
  "El Salvador",
  "Honduras",
];

console.log("**** Example: countries with an 'o' ****");
// Example:
// Make a new list called countries2 with only countries with an "o" in them. Use Array.push().
let countries2 = new Array();
// Note: you can do this, it is the same in JS...
// let countries2 = []; // Same as: new Array()
countries2.push(countries1[2]);
countries2.push(countries1[4]);
countries2.push(countries1[5]);
console.log(countries2);

// TODO: make a new array with only contries with an e in them.
console.log("**** TODO: countries with an 'e' ****");
let countries3 = new Array();

// TODO: make a new array with only contries with less than 8 in them.
console.log("**** TODO: countries less than 8 characters in length ****");
let countries4 = new Array();

// Example: make a new array containing the length of the animal names.
console.log("**** Examples: length of animal names ****");
let animalNameLengths = new Array();
animalNameLengths.push(zooAnimals2[0].length);
animalNameLengths.push(zooAnimals2[1].length);
animalNameLengths.push(zooAnimals2[2].length);
animalNameLengths.push(zooAnimals2[3].length);
animalNameLengths.push(zooAnimals2[4].length);
animalNameLengths.push(zooAnimals2[5].length);
animalNameLengths.push(zooAnimals2[6].length);
console.log(zooAnimals2);
console.log(animalNameLengths);

// TODO: make a new array containing the length of the country names.
console.log("**** TODO: length of country names ****");

// TODO: make a new array containing only the countries with names 8 characters or longer.
console.log("**** TODO: country names 8 chars or longer ****");

// TODO: find the average length of all the countries' names

// TODO: find the average length of only the countries names which are 8 characters or longer

// Challenge...

// TODO: create a new array based on whatever topic you like. Populate the array with at least 7 strings.

// TODO: Create a new array based on the old array but filter the items on any criteria you like. (word length, letter content, or anything else!) Give the new array a name that reflects its contents.

// TODO: Create a new array that contains the lengths of the items in your first array.

// TODO: Create a new array that contains the lengths of the items in your *first* array.

// TODO: Create a new array that contains the lengths of the items in your *second* array.

// TODO: find the average length of characters in each array.

// TODO: find the sum of the lengths of characters in each array.

// TODO: Which is longer? By how much? Log what you find to the Console.
