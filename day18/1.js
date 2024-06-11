class Menu{
     constructor(elem){
        this._elem=elem;
        elem.onclick=this.onclick.bind(this);
     }
     save(){
        alert('saving');
     }
     load(){
        alert('loding');
     }
     search(){
        alert('searching');
     }
     onclick(event){
        let action=event.target.dataset.action;
        if(action){
            this[action]();
        }
     };
}
new Menu(menu);