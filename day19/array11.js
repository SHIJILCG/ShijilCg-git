const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
//////////////////////////
const newArr = fruits.toSorted();
console.log(newArr);
////////////////////////////
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);
////////////////////////////////
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(() => 0.5 - Math.random());
console.log(points1);
/////////////////////////////////////////
// const point = [40, 100, 1, 5, 25, 10];
// for(let i=point.length-1;i>0;i--){
//     let j=Math.floor(random()*(i+1));
//     let k=point[i];
//     point[i]=point[j];
//     point[j]=k;
// }
// console.log(point);
//////////////////////////
const cars = [
  { type: "volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
cars.sort((a, b) => a.year - b.year);
console.log(cars);
const point = [40, 100, 1, 5, 25, 10];
const minvalue=Math.max(...point);
console.log(minvalue);