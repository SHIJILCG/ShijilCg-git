const fruits = ["Apple", "Orange", "Apple", "Mango"];
let podition=fruits.indexOf("Apple")+1;
console.log(podition);
///////////////////////////
let position=fruits.lastIndexOf("Apple")+1;
////////////////////////////////////////////
console.log(fruits.includes("Orange"));
let numbers=[1,2,3,4,5,55,6,7568,59,5,63,323];
let first=numbers.find(MYFUN);
function MYFUN(value,index,arrr){
    return value>18;
}
console.log(first);
///////////////////////////////////
let first1=numbers.findIndex(MYFUN);
console.log(first1);
let num=[22,34,5,656778,989,569,32321,1,3,3,4,5,9];
let fir=num.findLast(x=>x>50);
console.log(fir);
const fir1=num.findLastIndex(x=>x>40);
console.group(fir1);
