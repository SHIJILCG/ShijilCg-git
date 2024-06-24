function join(arr1, arr2) {
  let items = arr1.concat(arr2);
  let result = {};
  for (const obj of items) {
    if (!result[obj.id]) {
      result[obj.id] = obj;
      continue;
    }
    result[obj.id] = { ...result[obj.id], ...obj };
  }
  return Object.values(result);
}
const testCases = [
  {
    arr: [
      { id: 1, x: 2, y: 3, k: 10 },
      { id: 2, x: 3, y: 6 },
    ],
    arr1: [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ],
    exp: [
      { id: 1, x: 2, y: 3, k: 10 },
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ],
  },
  {
    arr: [
      {},
      { id: 2, x: 3, y: 6 },
    ],
    arr1: [
      { id: 2, x: 10, y: 20 },
      {},
    ],
    exp: [
       {id: 2, x: 10, y: 20 }, {}
    ],
  },

];
function Testjoin() {
  testCases.forEach((values, index) => {
    let result = join(values.arr, values.arr1);
    if(JSON.stringify(result)===JSON.stringify(values.exp)){
        console.log("Test",index+1,"Passed");
    }else{
        console.log("Test",index+1,"Failed");
        console.log("The Expected Result:",values.exp);
        console.log("The Actual Result:",result);
        console.log("................................")
    }
  });
}
Testjoin();
