// const powerSet = set => {
//   //   if (set.length === 0) return '';
//   //   if (set.length === 1) return '' + set[0];
//   //   if (set.length === 2) return
// };

// console.log(powerSet());

// function subsets(s) {
//   if (s.length === 0) {
//     return [[]];

var subsets = function(nums) {
  if (nums.length === 0) return [[]];
  const num = nums.shift();
  const rest = subsets(nums);
  return rest.concat(rest.map(set => [...set, num]));
};

console.log(subsets([6, 5, 7]));
