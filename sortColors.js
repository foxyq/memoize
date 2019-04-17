const sortColors = nums => {
  const len = nums.length;

  if (len <= 1) return nums;

  let zeroPointer = 0;
  let twoPointer = nums.length - 1;

  let i = 0;

  while (i <= twoPointer) {
    if (nums[i] === 2) {
      [nums[i], nums[twoPointer]] = [nums[twoPointer], nums[i]];
      twoPointer--;
    }

    if (nums[i] === 1) {
      i++;
    }

    if (nums[i] === 0) {
      [nums[zeroPointer], nums[i]] = [nums[i], nums[zeroPointer]];
      zeroPointer++;
      i++;
    }
  }

  return nums;
};

const num = [2, 0, 2, 1, 1, 0];
// const num = [1, 2];
// const num = [1, 0, 0];
console.log(sortColors(num));
