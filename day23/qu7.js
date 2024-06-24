function tocapittal(str){
    let resul=[];
    let resu=[];
     resu=str.toLowerCase();
     resul=resu.split(" ");
     let result= resul.map((value) => {
             return value.charAt(0).toUpperCase() + value.slice(1);  
     });
     return result.join(" ");
}
let testCases = [
    {
        str: 'how are you',
        exp: 'How Are You',
    },
    {
        str: 'HOW ARE YOU',
        exp: 'How Are You',
    },
    {
        str: 'how aRE yOU',
        exp: 'How Are You',
    },
];
function Testtocapittal() {
    testCases.forEach((testCase, index) => {
      let result = tocapittal(testCase.str);
      console.log("Test Case:", index + 1);
      console.log("Test Input:", testCase.str);
      console.log("Test Excepted Result:", testCase.exp);
      console.log("The Actual Result:", result);
      console.log(
        "Test Result:",
        JSON.stringify(result) === JSON.stringify(testCase.exp)
          ? "Passed"
          : "Failed"
      );
      console.log("..........................................................");
    });
  }
  Testtocapittal();
  