var findClosestElements = function(arr, k, x) {
  const len = arr.length;
  if (len <= k) return arr;

  const findClosestNum = () => {
    let closest = Number.MAX_SAFE_INTEGER;
    let xIndex = 666;

    for (let num in arr) {
      const dist = Math.abs(x - arr[num]);

      if (dist < closest) {
        xIndex = parseInt(num) + 1;
        closest = dist;
      }
    }

    return xIndex;
  };

  let xIndex = arr.indexOf(x);

  if (xIndex === -1) {
    xIndex = findClosestNum();
  }

  if (xIndex > k - 1) {
    return arr.slice(xIndex - k, xIndex);
  } else {
    const diffIndex = Math.abs(xIndex - k);
    return arr.slice(0, xIndex + diffIndex);
  }
};

// const arr = [1, 2, 3, 4, 5];
// const arr = [0, 0, 1, 2, 3, 3, 4, 7, 7, 8];
const arr = [0, 0, 0, 1, 3, 5, 6, 7, 8, 8];

const res = findClosestElements(arr, 2, 2);
console.log(res);
