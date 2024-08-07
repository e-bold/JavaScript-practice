const input = require('readline-sync');

let name1 = input.question ("Name of person 1: ");
let name2 = input.question ("Name of person 2: ");
let percentage = Math.floor(Math.random() * 100) + 1;
console.log(name1 + " and " + name2 + " are " + percentage + "% compatible.");