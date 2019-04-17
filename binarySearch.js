const includes = (arr, num, left = 0, right = arr.length - 1) => {
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === num) return mid;
  if (left > mid) return -1;

  if (arr[mid] < num) return includes(arr, num, mid + 1, right);
  if (arr[mid] > num) return includes(arr, num, 0, mid - 1);
};

const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 3, 8, 10], 8));
console.log(binarySearch([1, 3, 8, 8, 15], 15));
console.log(binarySearch([1, 3, 8, 10, 15], 9));
