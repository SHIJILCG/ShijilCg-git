function targetequalto(arr, target) {
    const result = [];
  
    function combine(start, path) {
      for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        result.push([...path]);
        combine(i + 1, path);
        path.pop();
      }
    }
  
    combine(0, []);
    
    const result1 = result.filter(
      (result2) => result2.reduce((total, value) => total + value, 0) === target
    );
  
    return result1;
  }
  
  const testcases = [
    { Input: [1, 2, 5, 5, 6, 6, 7], target: 4, Output: [] },
    { Input: [1], target: 1, Output: [[1]] },
    { Input: [], target: 0, Output: [] },
    { Input: [1, 1, 2, 3], target: 4, Output: [[1, 3], [1, 1, 2]] },
    { Input: [0], target: 1, Output: [] },
  ];
  
  function Testtargetequalto() {
    testcases.forEach((testcase) => {
      const result = targetequalto(testcase.Input, testcase.target);
      console.log("Test Input:", testcase.Input);
      console.log("Test Target:", testcase.target);
      console.log("Expected Output:", testcase.Output);
      console.log("Actual Output:", result);
      console.log(
        "Test Result:",
        JSON.stringify(testcase.Output) === JSON.stringify(result) ? "Passed" : "Failed"
      );
      console.log("..................................................................");
    });
  }
  
  Testtargetequalto();
  