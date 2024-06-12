const numbers=[1,2,3,4,5];
const res=numbers.every(isposti)
function isposti(item){
      return item>0;
}
console.log(res);