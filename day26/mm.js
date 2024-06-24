// function breakArray(arr, value) {
//     let result = [];

//     function helper(innerArr, currentValue) {
//         if (currentValue === 0 || !Array.isArray(innerArr)) {
//             // Base case: if currentValue is 0 or innerArr is not an array, return innerArr
//             return innerArr;
//         } else {
//             // Recursive case: map each item in innerArr and recursively call helper
//             return innerArr.map(item => helper(item, currentValue - 1));
//         }
//     }

//     // Call the helper function with the original array and valueToBreak
//     result = helper(arr, value);

//     return result;
// }

// let array = [1, [2, [3, 4]], [5]];
// let valueToBreak = 222;
// console.log(breakArray(array, valueToBreak));
// var flat = function (arr, n) {
//     return arr.flat(n)
//  };
//  console.log(flat([1,2,3,[4,5,6],[7,8,[9,[10],11],12],[13,14,15]],2))
