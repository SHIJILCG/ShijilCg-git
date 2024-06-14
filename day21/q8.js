function unuiqe(arr1, brr1) {
  const result = [];

  arr1.forEach((value) => {
    if (!brr1.includes(value) && !result.includes(value)) {
      result.push(value);
    }
  });

  brr1.forEach((value) => {
    if (!arr1.includes(value) && !result.includes(value)) {
      result.push(value);
    }
  });

  return result;
}

console.log(unuiqe([1, 2, 3, 4, 5], [2, 7, 1, 2, 3, 4]));
