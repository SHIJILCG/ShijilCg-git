// const fruits = [
//     {"apples": "oranges"},
//     ["apples", true, "oranges"],
//     [],
//     [0],
// ];

// fruits.forEach((values)=>{
//     let firsttype = typeof values[0]; // This will give you the type of the first element in the array
//     const result = values.every(value => typeof value === firsttype);
//     console.log(result);
// });
const fruits = ["apples", "bananas", "oranges"];
console.log(fruits instanceof Array);
////////////////////////////////////////////////////////////
const fruits1=new Map([
    ["apple",500],
    ["banana",300],
    ["oranges",200]
]);
console.log(fruits instanceof Map);
////////////////////////////////////////////////////////////////////////////////////////////
const fruits2 = new Set(["apples", "oranges"]);
console.log(fruits2 instanceof Set);