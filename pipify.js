String.prototype.pipefy = function() {
  return this.split('')
    .map(x => x + '|')
    .join('');
};

console.log('abcdpgc'.pipefy());

const currySum = one => two => one + two;

const add3 = currySum(3);
console.log(add3(5) === 8);
console.log(currySum(5)(10));

const fact = num => {
  if (num <= 1) return 1;

  return num * fact(num - 1);
};

console.log(fact(3) === 6 && fact(0) === 1);
