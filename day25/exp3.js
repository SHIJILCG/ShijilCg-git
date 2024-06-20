function common_to_each(arr1, arr2) {
  let resultarr = [];
  arr1.forEach((num) => {
    if (arr2.some((elem) => elem === num)) resultarr.push(num);
  });
  let brr=resultarr.filter((value,index)=>resultarr.indexOf(value)===index)
  return brr;
}
const arrays = [
  {
    arr1: [1, 2, 3, 4],
    arr2: [3, 4, 5, 6],
    exp: [3, 4],
  },
  {
    arr1: [1, 2, 3, 4],
    arr2: [5, 6],
    exp: [],
  },
  {
    arr1: [1, 2, 3, 4],
    arr2: [1, 2, 3, 4],
    exp: [1, 2, 3, 4],
  },
  {
    arr1: [1, 2, 3, 4],
    arr2: [4, 5, 6],
    exp: [4],
  },
  {
    arr1: [0, 0, 0, 0],
    arr2: [0, 0, 0, 0],
    exp: [0],
  },
];
function Testcommon_to_each() {
  arrays.forEach((values, index) => {
    let result = common_to_each(values.arr1, values.arr2);
    if (
      result.length === values.exp.length && result.every((val,ind) =>val === values.exp[ind])
    ) {
      console.log("Test", index + 1, "Passed");
    } else {
      console.log("Test", index + 1, "Failed");
      console.log("The Expected Result:", values.exp);
      console.log("The Actual Result:", result);
      console.log("..................................");
    }
  });
}
Testcommon_to_each();
