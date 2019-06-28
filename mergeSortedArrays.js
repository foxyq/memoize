const my = [3, 4, 6, 10, 11, 16, 20];
const arr = [1, 5, 8, 12, 14, 19];

const merge = (arr1, arr2) => {
  const res = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    const a1 = arr1[p1];
    const a2 = arr2[p2];

    if (a1 > a2) {
      res.push(a2);
      p2++;
    } else {
      res.push(a1);
      p1++;
    }
  }

  if (p1 >= arr1.length && p2 < arr2.length) {
    const rest = arr2.slice(p2);
    return res.concat(rest);
  }

  if (p2 >= arr2.length && p1 < arr1.length) {
    const rest = arr1.slice(p1);
    return res.concat(rest);
  }

  return res;
};

console.log(merge(my, arr));
