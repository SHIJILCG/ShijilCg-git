function handler(){
    alert('Thanks');
};
function handler2(){
    alert('THANKS AGAIN')
}
elem.onclick=()=>alert("Hello");
elem.addEventListener("Click",handler1);
elem.addEventListener("Click",handler2);
document.onDOMContentLoaded=function(){
       alert("DOM built");
};
document.addEventListener("DOMContetLoaded",function(){
    alert("DOM built");
})