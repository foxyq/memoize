const currySum = a => b => a + b;

console.log(currySum(2)(3));

const add5 = currySum(5);

console.log(add5(10));
