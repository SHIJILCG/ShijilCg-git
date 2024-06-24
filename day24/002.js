function numberof(arr) {
  let a = {};
  arr.forEach((value) => {
    if (a[value]) {
      a[value]++;
    } else {
      a[value] = 1;
    }
  });
  return a;
}
const fruits = [
  {
    arr: ["apple", "banana", "apple", "orange", "banana", "apple"],
    exp: { apple: 3, banana: 2, orange: 1 },
  },
  { arr: [], exp: {} },
  { arr: ["apple", "banana"], exp: { apple: 1, banana: 1 } },
  { arr: ["apple", "apple", "apple"], exp: { apple: 3 } },
  { arr: ["banana", "apple", "banana", "apple"], exp: { banana: 2,apple: 2 } },
];
function Testnumberof() {
  fruits.forEach((fruit, index) => {
    let result = numberof(fruit.arr);
    console.log("Test No:", index + 1);
    console.log("The Input Array:", fruit.arr);
    console.log("The Expected Result:", fruit.exp);
    
      if(JSON.stringify(result) === JSON.stringify(fruit.exp)){
        console.log("Test Passed");
        console.log("...............................................");
      }else{
        console.log("The Actual Result:", result);
        console.log("...............................................");
      }
  });
}
Testnumberof();
