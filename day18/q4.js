// const numbers = [1, 23, 4, 5, 6, 6, 7];
// numbers.forEach((item, index, arr) => {
//   console.log(item);
// });
// /////
// let sum;
// numbers.forEach((item) => {
//   sum += item;
// });
// console.log("sum=" + sum);
// //////////////////////////////////
// const letter = ["a", "b", "c", "a", "a", "c", "b", "b"];
// let count = {};
// letter.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });
// console.log(count);
// /////////////////////////////////////////////
// const num = [1, 2, 3, 4, 5, 6];
// const num1 = num.map(dubble);
// function dubble(value, index, arr) {
//   return value + 2;
// }
// console.log(num1);
// /////////////////////////////////////////////////////////////
// const numb = [
//   { name: "laptop", price: 1000, count: 5 },
//   { name: "desktop", price: 1500, count: 2 },
//   { name: "phone", price: 500, count: 10 },
// ];
// const totalnumb = numb.map((item) => item.price * item.count);
// console.log(totalnumb);
// /////////////////////////////////////////////////////////////
// const numbers1 = [1, 23, 4, 5, 6, 6, 7];
// const even = numbers.filter(isEvan);
// function isEvan(value) {
//   return value % 2 === 0;
// }
// console.log(even);
// ////////////////////////////
// const people=[
//     {name:'shijil',age:29},
//     {name:'Ivan', age:18},
//     {name:'jai',age:15}
// ];
// const adult=people.filter(item => item.age >= 18);
// console.log(adult);
// //////////////////////////////////////////////////////////////////
// const nu=[1,2,3,4,5,6,6,7,8,5,43,43,323231,3,321,323111,112,1,2,12,31,3,443,111,1,1,1,1,13,4,6];
// const value=nu.filter((value,index,arr)=>{return arr.indexOf(value)===index;
// });
// console.log(value);
// /////////////////////////////////////////////////////////////////////////////
// const numb1=[1,2,3,4,5];
// const total=numb1.reduce(sum1,0);
// function sum1(accumulator,value,index,arr){
//     return accumulator+value;
// }
// console.log(total);
// ////////////////////////////////////////
// const max=[1,2,3,4,5];
// const max1=max.reduce(callback,-Infinity);
// function callback(accumulator,value){
//     if(accumulator>value){
//         return accumulator;
//     }else{
//         return value;
//     }
// }
// console.log(max1);
// //////////////////////////////////////////
// const atore = [
//     { name: "laptop", price: 1000, count: 5 },
//     { name: "desktop", price: 1500, count: 2 },
//     { name: "phone", price: 500, count: 10 },
//   ];
//   const totalvaluestore=atore.reduce((acc,item)=>accumulator + (item.value*item.count),0);
// console.log(totalvaluestore);
// const number=[1,2,3,4,5];
// // const number2=number.slice();
// const participents=['Florin','Ivan','jai','shijil','lisa'];
// const winners=participents.slice(0,3);
// console.log(winners);
// const numbers=[1,2,3,4,5];
// numbers.splice(2,3);
// console.log(numbers);
// const names=['shijil','divin','akhile'];
// names.sort();
// console.log(names);
// ////////////////////////////////////////
// const numbers=[1,3,5,2,3,245,67,42,788,332,5];
// numbers.sort((a,b)=>a-b);
// console.log(numbers);
// const atore = [
//         { name: "laptop", price: 1000, count: 5 },
//          { name: "desktop", price: 1500, count: 2 },
//         { name: "phone", price: 500, count: 10 },
//       ];
// atore.sort((a,b)=>a.price-b.price);
// console.log(atore);
// const a=[1,2,3,4,];
// const b=[3,4,5,5,5,5];
// const c=a.concat(b);
// console.log(c);
// const numbers=[1,2,3,4,5];
// numbers.fill(0,1,4);
// console.log(numbers);
// function fillnumber(n){
//     return Array(n).fill(0).map((_,idx)=>idx + 1);
// }
// console.log(fillnumber);
// const names=['shijil','ivan','liam','divin','shijil','ahhile'];
// const res=names.includes('patrick');
// console.log(res);
// const fruits=['Apple','Mango'];
// const res=fruits.includes('Orange');
// if(res){
//     console.log('yuppy');
// }else{
//     console.log("buy a orange");
// }
const coutries=['Romania','USA','India'];
const res=coutries.join('#');
console.log(res);

