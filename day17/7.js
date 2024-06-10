let obj={
    handleEvent(event){
        alert(event.type + "at" +event.currentTarget);
    }
};
elem2.addEventListener('click',obj);
