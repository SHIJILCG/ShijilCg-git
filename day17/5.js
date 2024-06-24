function handler1(){
    alert('thanks');
};
function handler2(){
    alert('Thanks again');
}
elem.onclick=()=>alert("Hello");
elem.addEventLisntener('click',handler1);
elem.addEventLisntener('click',handler2);
