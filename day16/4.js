function getCoords(){
      let box=elem.getBoundingClientRect();

return{
    top:box.top+window.pageYOffset,
    right:box.right+window.pageXOffset,
    bottom:box.bottom+window.pageYOffset,
    left:box.left+window.pageXOffset
};
}