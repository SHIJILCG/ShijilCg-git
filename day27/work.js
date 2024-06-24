function compactObject(obj) {
    let reesult=[];
for (let key in obj) {
      if(Array.isArray(obj[key])){
           consol
      }
    else {
      if (obj[key] > 0) reesult.push(key);
    }
  }
  console.log(reesult)
}
obj={ a: null, b: [false, 1] };
compactObject(obj)