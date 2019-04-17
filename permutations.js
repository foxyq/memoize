const permute = str => {
  const res = [];

  if (str.length === 0) {
    res.push('');
    return res;
  }

  for (let i = 0; i < str.length; i++) {
    const before = str.substring(0, i);
    const after = str.substring(i + 1);

    const perms = permute(before + after);

    perms.forEach(perm => res.push(perm + str[i]));
  }

  return res;
};

const permArr = arr => {
  const res = [];

  const helper = (perm, candidates) => {
    if (candidates.length === 0) {
      res.push(perm.slice()); // push copy, not just a ref
    }

    for (let i = 0; i < candidates.length; i++) {
      const nextCandidate = candidates.slice();
      perm.push(candidates[i]);
      nextCandidate.splice(i, 1);
      helper(perm, nextCandidate);
      perm.pop();
    }
  };

  helper([], arr);
  return res;
};

const permuteArray = arr => {
  const res = [];

  const recurse = (currPerm, options) => {
    if (options.length === 0) {
      res.push(currPerm.slice());
    }

    for (let i = 0; i < options.length; i++) {
      currPerm.push(options[i]);
      let newOpt = options.slice();
      newOpt.splice(i, 1);
      recurse(currPerm, newOpt);
      currPerm.pop();
    }
  };

  recurse([], arr);
  return res;
};

// console.log(permute('abc'));
console.log(permuteArray([1, 2, 3]));
