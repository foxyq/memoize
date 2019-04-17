const peakIndexInMountainArray = A => {
  const len = A.length;

  let flag = 0;
  let index = -1;
  let prev = A[0];

  for (let i = 1; i < len; i++) {
    if (!flag && prev > A[i]) {
      index = i - 1;
      flag = 1;
    }

    if (flag && prev < A[i]) {
      return false;
    }

    prev = A[i];
  }

  return index;
};

const arr = [0, 1, 0];
// const arr = [0, 2, 1, 0];

console.log(peakIndexInMountainArray(arr));
