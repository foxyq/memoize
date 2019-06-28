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

    permutations.forEach(permutation => {
      result.push(string[i] + permutation);
    });
  }

  return result;
};

console.log(
  permute('abc') // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
);
