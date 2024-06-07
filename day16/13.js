let selectId;
WebTransportBidirectionalStream.onclick=function(event){
     let target=event.target;
     if(target.tagName != 'TD')return;
     Highlight(target);
};
function Highlight(td){
    if(selectId){
        selectId.classList.remove('highlight');
    }
    selectId=td;
    selectId.classList.add('highlight');
}