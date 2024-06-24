function findset(arr, target) {
    let brr2 = [];
  
    // Generate all possible contiguous subarrays
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === target) {
          brr2.push(arr.slice(i, j + 1)); // Push the subarray from index i to j
        }
      }
    }
  
    return brr2;
  }
  
  console.log(findset([10, 1, 2, 7, 6, 1, 5], 8));
  