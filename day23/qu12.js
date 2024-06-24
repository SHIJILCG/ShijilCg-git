function multi(arr){
   arr.sort((a,b)=>b-a);
    let result=[arr[0],arr[1]];
    return result;
}
console.log(multi([3, 6, 2, 7, 1, 8, 4]));