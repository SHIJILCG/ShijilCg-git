let text="Hello World ! Hello W3School";
let result=text.match(/o+/g);
console.log(result);
{
    let result="Hellooo World ! Hello W3School!"
    let result1=result.match(/lo*/g);
    console.log(result1);
}
{
    let text="1 100 or 1000?";
    let result=text.match(/10?/g);
    console.log(result);
}
{
    const pattern=/e/;
console.log(pattern.test(text));
}
{
    const obj=/e/.exec("The best things in life are free");
    console.log("The chareacter found at"+obj.index);
}