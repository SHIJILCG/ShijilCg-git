const letters=  new Set(["a","b","c"]);
for(let b of letters){
    console.log(b);
}
letters.add("a");
letters.add("d");
letters.add('e');
console.log("//////");
for(let b of letters){
    console.log(b);
}
////////////////////////////
const letters1=new Set(["b","11","cccc","3454345"]);
for(let b of letters1){
    console.log(b);
}
const numbers3=new Set([...letters,...letters1]);
for(let b of numbers3){
    console.log(b);
}
///////////////////////////////
console.log(typeof letters);
///////////////////////////////////
