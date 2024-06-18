function stringstyle(arr) {
    let result = "";
    for (let str of arr) {
        let parts = str.split("_"); 
        let transformed = parts.map((part, index) => {
            if (index > 0) { 
                return part.charAt(0).toUpperCase() + part.slice(1); 
            } else {
                return part.charAt(0);  
            }
        });
        result += transformed.join("_"); 
    }
    
    return result;
}

console.log(stringstyle(["jjdfg_jfgj_id_nvvnvn"]));
