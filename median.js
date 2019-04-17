const isEven = num => {
  return num % 2 === 0;
};

const findMid = len => len / 2;

const findMed = arr => {
  let med = 666;
  const len = arr.length;

  if (!isEven(len)) {
    if (len > 1) {
      med = arr[parseInt(findMid(len + 1)) - 1];
    } else {
      med = arr[0];
    }
  } else {
    const mid = findMid(len) - 1;
    med = (arr[mid] + arr[mid + 1]) / 2;
  }

  return med;
};

const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

  return findMed(mergedArray);
};

console.log(findMedianSortedArrays([3], [-2, -1]));
