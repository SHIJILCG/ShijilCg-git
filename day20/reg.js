let text = "Visit W3School";
let n = text.search("W3School");
console.log(n);
/////////////////////////////////////////////////////////////
let text1 = "Visit Microsoft!";
let result = text1.replace("Microsoft", "W3Schools");
console.log(result);
//////////////////////////////////////////////////
{
  let text = "Visit W3Schools";
  let result = text.match(/ w3Schools/i);
  console.log(result);
}
{
  let text = "Is this all there is?";
  let result = text.match(/is/g);
  console.log(result);
}
{
  let text = "\nIs th\nis it\n?";
  result = text.match(/^is/m);
  console.log(result);
}
{
  let text = "aaaabb";
  let result = text.match(/(aa)(bb)/d);
  console.log(result);
}
///////////////////////////////////////////////////
{
  let text = "Is this all there is?";
  let result = text.match(/[h]/g);
  console.log(result);
}
{
  //////////////////////////////////////////////////
  let text = "1234567891";
  let result = text.match(/[1]/g);
  console.log(result);
}
{
  let text = "re, green, red, green, gren, gr, blue, yellow";
  let result = text.match(/(red|green)/g);
  console.log(result);
}
{
  let text = "Give 100%!";
  let result = text.match(/\d/g);
  console.log(result);
}
{
    
}