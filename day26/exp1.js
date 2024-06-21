
var isEmpty = function(obj) {
    if(JSON.stringify(obj)===JSON.stringify({}) || JSON.stringify(obj)===JSON.stringify([]))return true;
    else return false;
};