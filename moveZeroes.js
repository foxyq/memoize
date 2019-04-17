var moveZeroes = function(nums) {
  let currIndex = 0;
  let pointer = 0;
  const length = nums.length;

  if (length <= 1) return nums;

  while (currIndex < length - 1) {
    console.log("currindex " + currIndex + ", pointer " + pointer);
    if (nums[currIndex] === 0) {
      pointer = currIndex + 1;

      while (nums[pointer] === 0 && pointer < length - 1) {
        pointer += 1;
      }

      nums[currIndex] = nums[pointer];
      nums[pointer] = 0;
      //   console.log("currindex " + currIndex + ", pointer " + pointer);
    }
    currIndex += 1;

    // console.log(nums);
    // console.log("***************");
  }

  return nums;
};

moveZeroes([0, 1]);
