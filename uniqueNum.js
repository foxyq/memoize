const unique = arr => {
  const set = new Set();

  arr.forEach(num => {
    if (!set.has(num)) {
      set.add(num);
    } else {
      set.delete(num);
    }
  });

  return [...set];
};

const uniqueXor = arr => {
  let res = 0;

  arr.forEach(num => {
    res = res ^ num;
  });

  return res;
};

console.log(uniqueXor([1, 2, 3, 4, 5, 6, 7, 4, 6, 5, 3, 1, 2, 0, 0]));

const stringXor = arr => {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    const charToNum = arr[i].charCodeAt(0);
    res = res ^ charToNum;
  }

  return String.fromCharCode(res);
};

console.log(stringXor('aabdbcc'));
