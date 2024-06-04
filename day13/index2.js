const startMessageBtn=document.queryselecct('.start-message');
const closeWindowBtn=documment.queryselecct('.window__button');
const WindowElementRef=new WeakRef(document.querySelector(".Window__body"));
startMessageBtn.addEventListener('click',()=>{
    startMessages(WindowElementRef);
    startMessageBtn.disable=true;
})
closeWindowBtn.addEventListener('Click',()=>document.querySelector(".window__body").remove());
const startMessages=(element)=>{
    const timerId=setInterval(()=>{
        if(element.deref()){
        const payload=document.childElement("p");
        payload.textContent=`message system status OK:${new Date().toLocaleDateString()}`;
        element.deref().append(payload);
        }else{
            alert("the element has been deleted");
            clearInterval(timerId);
        }
    },1000);
};
