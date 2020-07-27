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
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"