let str = "Hello world! hello universe!";
let substring = "Hello";
let regex = new RegExp(substring, 'gi');
let matches=str.match(regex);
console.log(matches.length);