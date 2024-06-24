function foo(){
    i=0;
   let x={
      y:function(){
        return i++;
      }
   }
   return x.y
}
x=foo();
console.log(x());
console.log(x());
console.log(x());
console.log(x());
