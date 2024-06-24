function styling(arr){
     return arr.split(" ").map(rr => rr.charAt(o).toUpperCase() + rr.slice(1)).join(" ");
}
let string=[
    ["ihfhfwf jkjgjn jgfljg ljnglgn KKKKK hfjk"]
]
function Teststyling(){
    string.forEach((str,index)=>{
         let result=styling(str);
         console.log(result);
    })
}
Teststyling()