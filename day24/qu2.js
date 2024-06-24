function operation(arr) {
  //settimer  add akitila
  let brr = [];
  let popval = [];
  arr.forEach((value) => {
    if (value != "Undo" && value != "redo") {
      brr.push(value);
    }
    if (value === "Undo") {
      if (brr.length === 0) return 0;
      popval.push(brr.pop());
      let n = popval.length;
      console.log("Undo", popval[n - 1]);
    } else if (value === "redo") {
      if (popval.length === 0) return 0;
      brr.push(popval.pop());
      let n = brr.length;
      console.log("redo", brr[n - 1]);
    } else {
      console.log(value);
    }
  });
  return brr;
}
testCase = [
  { Given: ["hii", "hehfuhf", "Undo", "redo"], exp: ["hii", "hehfuhf"] },
  {
    Given: ["hii", "hehfuhf", "Undo", "redo", "bb"],
    exp: ["hii", "hehfuhf", "bb"],
  },
  {
    Given: ["hii", "hehfuhf", "Undo", "redo", "bb", "Undo"],
    exp: ["hii", "hehfuhf"],
  },
  {
    Given: ["hii", "hehfuhf", "Undo", "redo", "bb", "Undo", "Undo"],
    exp: ["hii"],
  },
  { Given: ["Undo", "redo", "bb", "Undo"], exp: [] },
  { Given: [], exp: [] },
  {
    Given: [
      "rf3f3f",
      "4r3t3t35gf",
      "Undo",
      "Undo",
      "Undo",
      "redo",
      "redo",
      "redo",
    ],
    exp: ["rf3f3f", "4r3t3t35gf"],
  },
];
function Testoperation() {
  testCase.forEach((testCases, index) => {
    let result = operation(testCases.Given);
    console.log("Test No:", index + 1);
    console.log("test Input Given:", testCases.Given);
    console.log("The Actual Result:", result);
    if (
      result.length === testCases.exp.length &&
      result.filter((value, index) => {
        value === testCases.exp[index];
      })
    ) {
      console.log("Test Result:Passed");
    } else {
      console.log("Test" + " " + index + " " + "Failed");
      console.log("Test Expected Result:", testCases.exp);
    }
    console.log(
      "...................................................................."
    );
  });
}
Testoperation();
