//Challenge 1 - Filter unique array members
// importance: 5
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  return [...new Set(arr)]
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

//Challenge 2-Filter anagrams

// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Write a function aclean(arr) that returns an array cleaned from anagrams.

//Solution - Using Map

function aclean(arr){
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }
  // return Array.from(map.values());
  return [...map.values()]; // Spread operator
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

//Solution 2 - Using plain object

function aclean2(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean2(arr2) );

//Challenge 3 - Iterable keys

// We’d like to get an array of map.keys() in a variable and then do apply array-specific methods to it, e.g. .push.

let map = new Map();

map.set("name", "John");

// let keys = Array.from(map.keys());
let keys = [...map.keys()]; // Spread operator

keys.push("more");

alert(keys); // name, more

//WeakMap and WeakSet

//Challenge 1 - Store "unread" flags
// There’s an array of messages:

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
// Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

// Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

// P.S. When a message is removed from messages, it should disappear from your structure as well.

// P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.



let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];



let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)

//Challenge 2 - Store read dates
// There’s an array of messages as in the previous task. The situation is similar.

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
// The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

// In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.

// P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.

let messages2 = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages2[0], new Date(2020, 7, 26));
// Date object we'll study later
console.log(messages2)