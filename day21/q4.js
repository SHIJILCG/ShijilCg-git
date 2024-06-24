// // // function findMaxConsecutiveOnes(arr) {
// // //    let brr=arr.reduce((total,value)=>{
// // //         if(value===1)return total +1;
// // //         else return -1;
// // //    },0);
// // //    brr = brr.filter(total => total !== -1);
// // //    return  Math.max(...br);
// // // }
// // // let Input = [1, 1, 0, 1, 1, 1];
// // // console.log(findMaxConsecutiveOnes(Input));
// // function findMaxConsecutiveOnes(arr) {
// //   let brr = arr.reduce((total, value) => {
// //     if (value === 1) {
// //       return total + 1;
// //     } else {
// //       return -1; // Mark non-1 values for filtering
// //     }
// //   }, 0);

// //   // Filter out non-1 values (-1) from brr
// //   brr = brr.filter((total) => total !== -1);

// //   // Find the maximum count of consecutive 1s
// //   return Math.max(...brr);
// // }

// function findMaxConsecutiveOnes(arr) {
//     let j=0;
//     let result=[];
//   for(let i in arr){
//     if(arr[i]===1){
//          j++;
//     }
//     else{
// //         result.push(j);
// //     }

// //   }
// //   console.log(result);
// // }
// // let Input = [1, 1, 0, 1, 1, 1];
// // findMaxConsecutiveOnes(Input);
// function findMaxConsecutiveOnes(arr) {
//   let j = 0;
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       j++;
//     } else {
//       if (j > 0) {
//         result.push(j);
//       }
//       j = 0; // Reset count for next sequence
//     }
//   }

//   // Push last sequence if array ends with 1s
//   if (j > 0) {
//     result.push(j);
//   }

//   console.log(result);
// }

// // Example usage:
// let Input = [1, 1, 0, 1, 1, 1];
// findMaxConsecutiveOnes(Input);
// function findMaxConsecutiveOnes(arr) {
//     let j=0;
//     let result=[];
//     arr.forEach(value=> {
//         value===1?j++:result.push(j);
//     });
// }
function findMaxConsecutiveOnes(arr) {
  let maxcount = 0;
  let currentcount = 0;
  arr.forEach((value) => {
    if (value === 1) {
      currentcount++;
      if (currentcount > maxcount) maxcount = currentcount;
    } else {
      currentcount = 0;
    }
  }, 0);
  return maxcount;
}
testcases=[
    {Input:[1,1,1],Output:3},
    {Input:[0,0,0],Output:0},
    {Input:[0],Output:0},
    {Input:[1],Output:1},
    {Input:[1,0,0,0,1],Output:1},
    {Input:[1,0,0,0],Output:1},
    {Input:[0,0,0,1],Output:1},
    {Input:[1,0,0,1,1,1,1,0,0],Output:4},
    {Input:[],Output:0},
    {Input:[1,1,1,0,1,1,1,1,1],Output:5},
    {Input:[1,1,1,1,0,1,1,1,1],Output:4}, 
]
function testfindMaxConsecutiveOnes(){
     testcases.forEach(testcase=>{
        const result=findMaxConsecutiveOnes(testcase.Input);
        console.log("The Input:",testcase.Input);
        console.log("The Excepted Result:",testcase.Output);
        console.log("The Actual Result:",result);
        console.log("The Test Result:",testcase.Output==result ? "Passed" : "Failed");
        console.log("..........................................................");
     })
}
testfindMaxConsecutiveOnes()
