function commontvalue(arr1, arr2) {
  let arr3 = [];
  for (i of arr1) {
    for (j of arr2) {
      if (i === j) arr3.push(j);
    }
  }
  return arr3;
}
const values = [
  { arr1: [1, 2, 3, 4], arr2: [3, 4, 5, 6], exp: [3, 4] },
  { arr1: [1, 2, 3, 4], arr2: [5, 6], exp: [] },
  { arr1: [], arr2: [], exp: [] },
  { arr1: [1], arr2: [1], exp: [1] },
  { arr1: [1, 2], arr2: [1, 2], exp: [1, 2] },
  { arr1: [1], arr2: [2], exp: [] },
];
function Testcommontvalue() {
  values.forEach((value, index) => {
    let result = commontvalue(value.arr1, value.arr2);
    console.log("Test No:", index + 1);
    console.log("Test Input:arr1=", value.arr1, "arr2=", value.arr2);
    console.log("The Expected Result:", value.exp);
    if (
      result.length === value.exp.length &&
      result.every((valu, index) => valu === value.exp[index])
    ) {
      console.log("Test Passed");
      console.log("............................................");
    } else {
      console.log("The Actual Result:", result);
      console.log("Test Failed");
      console.log("............................................");
    }
  });
}
Testcommontvalue();
