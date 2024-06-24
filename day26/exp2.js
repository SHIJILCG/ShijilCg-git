////Given an array arr and a chunk size size, return a chunked array.
function chunk(arr, size) {
   if (size <= 0) return arr;
  let result = [];
  for (let i=0;i<arr.length;i+=size) {
    result.push(arr.slice(i,i + size));
  }
  return result;
};
const testCases = [
  { arr: [1, 4, 5, 7, 89, 4], size: 1, exp: [[1], [4], [5], [7], [89], [4]] },
  { arr: [], size: 1, exp: [] },
  { arr: [1, 4, 5, 7, 89, 4], size: 6, exp: [[1, 4, 5, 7, 89, 4]] },
  { arr: [1, 4, 5, 7, 89, 4], size: 0, exp: [1, 4, 5, 7, 89, 4] },
];
function Testchunk() {
  testCases.forEach((value, index) => {
    let result = chunk(value.arr, value.size);
    if (JSON.stringify(result) === JSON.stringify(value.exp)) {
      console.log("Test", index + 1, "Passed");
    } else {
      console.log("Test", index + 1, "Failed");
      console.log("The Expected Result:", value.exp);
      console.log("The Actual Result:", result);
      console.log("..........................................");
    }
  });
}
Testchunk();
