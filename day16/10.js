let obj={
    handleEvent(event){
        alert(event.type + "at" + event.currentTarget);
    }
};
elem.addEventListener('click',obj);