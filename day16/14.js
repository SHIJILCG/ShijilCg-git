table.onclick=function(event){
    let td=event.target.closets('td');
    if(!td)return;
    if(!table.contains(td))return;
    Highlight(td);
};
