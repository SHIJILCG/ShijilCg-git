// console.log(Boolean(10 > 9));
// ////////////////////////////////////////
// let x=Boolean(10>3);
// console.log(x);
console.log("hiii");
console.log(Boolean(10 > 9));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-0));
console.log(Boolean(""));
let x;
console.log(Boolean(x));
{
  let x = null;
  console.log(Boolean(x));
}
{
  let x = 10 / "Hallo";
  console.log(Boolean(x));
}
{
  let x = true;
  console.log(Boolean(x));
}
{
  let x = false;
  let y = new Boolean(false);
  console.log(Boolean(x));
  console.log(Boolean(y));
}
console.log("HI");
{
  let x = false;
  let y = new Boolean(false);
  if(x==y)console.log("True");
  else console.log("false");
}{
    let x = false;
    let y = new Boolean(false);
    if(x===y)console.log("True");
    else console.log("false");   
}
console.log("HI");
{
    let x = new Boolean(false);
    let y = new Boolean(false);
    if(x===y)console.log("True");
    else console.log("false");  
}{
    let x = new Boolean(false);
    let y = new Boolean(false);
    if(x==y)console.log("True");
    else console.log("false"); 
}
