function Uno_redo(arr) {
  let print = [];
  let popvalue = [];
  let brr = [];
  arr.forEach((value) => {
    if (value != "Undo" && value != "redo") {
      brr.push(value);
    }
    if (value === "Undo") {
      if (brr.length === 0) return 0;
      popvalue.push(brr.pop());
      let n = popvalue.length;
      print.push(`Undo${popvalue[n - 1]}`);
    } else if (value === "redo") {
      if (popvalue.length === 0) return 0;
      brr.push(popvalue.pop());
      let n = brr.length;
      print.push(`redo'${brr[n - 1]}`);
    } else {
      print.push(value);
    }
  });
  return { finalResult: brr, printMessages: print };
}
const TestCases = [
  { arr: ["Hiii", "Undo", "redo", "Undo", "Undo", "redo"], exp: ["Hiii"] },
  { arr: ["Undo", "redo", "Undo", "Undo", "redo"], exp: [] },
  { arr: ["Hiii"], exp: ["Hiii"] },
];
function TestUno_redo() {
  TestCases.forEach((value, index) => {
    let result = Uno_redo(value.arr);
    result.printMessages.forEach((print, printindx) => {
      setTimeout(() => {
        console.log(print);
        if (printindx === result.printMessages.length - 1) {
          console.log(result.finalResult);
          console.log("................................")
        }
      }, printindx * 2000);
    });
  });
}
TestUno_redo();
