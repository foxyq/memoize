var moveZeroes = function(nums) {
  let currIndex = 0;
  let pointer = 0;
  const length = nums.length;

  if (length <= 1) return nums;

  while (currIndex < length - 1) {
    if (nums[currIndex] === 0) {
      pointer = currIndex + 1;

      while (nums[pointer] === 0 && pointer < length - 1) {
        pointer += 1;
      }
      nums[currIndex] = nums[pointer];
      nums[pointer] = 0;
    }
    currIndex += 1;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1, 0]));
