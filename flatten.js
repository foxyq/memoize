const arr = [1, [2, [6, [666]]], 3, [4]]; // [1,true]

const flattenArr = arr => {
  let res = []; // [1,true,'six']
  arr.forEach(elem => {
    // check type for arr
    if (typeof elem !== 'object') {
      res.push(elem);
    } else {
      const val = flattenArr(elem);
      res = res.concat(val);
    }
  });

  return res;
};

const deep = [
  [1, 2, 3],
  [[4, 5, 6], [7, 8, 9], [[10, 11, 12], [13, 14, 15]]],
  16,
  17
];

console.log(flattenArr(arr));
console.log(flattenArr(deep));
