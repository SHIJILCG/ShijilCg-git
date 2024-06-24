const person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
    console.log(x);
}
const num=[1,2,3,4,5,6,4343,32,32,32,,3232,4,4];
for (let x in num) {
    console.log(x);
}
const numbers=[45,4,9,16,25];
numbers.forEach(myfunc);
function myfunc(value,index){
    console.log('Numbers['+index+']='+value);
};