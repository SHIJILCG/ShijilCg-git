////Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
Array.prototype.groupBy = function (fn) {
  let result = {};
  this.forEach((Elements) => {
    const key = fn(Elements);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(Elements);
  });
  return result;
};
testCases = [
  {
    arr: [{ id: "1" }, { id: "1" }, { id: "2" }],
    exp: { 1: [{ id: "1" }, { id: "1" }], 2: [{ id: "2" }] },
  },
  {
    arr: [{ id: "1" }, { id: "2" }, { id: "3" }],
    exp: { 1: [{ id: "1" }], 2: [{ id: "2" }], 3: [{ id: "3" }] },
  },
  {
    arr: [{ id: "1" }],
    exp: { 1: [{ id: "1" }] },
  },
  {
    arr: [],
    exp: {},
  },
];
function TestgroupBy() {
  testCases.forEach((value, index) => {
    let reesult = value.arr.groupBy((array) => array.id);
    if (JSON.stringify(reesult) === JSON.stringify(value.exp)) {
      console.log("Test", index + 1, "Passed");
    } else {
      console.log("Test", index + 1, "Failed");
      console.log("The Expected Result:", value.exp);
      console.log("The Actual  Result:", reesult);
      console.log("......................................");
    }
  });
}
TestgroupBy();
