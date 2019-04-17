const permute = string => {
  let result = [];

  if (string.length < 1) {
    result.push(string);
    return result;
  }

  for (let i = 0; i < string.length; i++) {
    const before = string.substr(0, i);
    const after = string.substr(i + 1);

    const permutations = permute(before + after);
    // console.log(permutations);

    permutations.forEach(permutation => {
      result.push(string[i] + permutation);
    });

    // console.log('result ' + result);
    // console.log('***');
  }

  return result;
};

// console.log(permute('')); // [])
console.log(
  permute('abc') // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
);
