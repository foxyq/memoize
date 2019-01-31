const memoize = fn => {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    return fn.cache[args]
      ? fn.cache[args]
      : (fn.cache[args] = fn.apply(this, args));
  };
};

function factorial(num) {
  if (num === 1 || num === 0) return 1;

  return num * factorial(num - 1);
}

const memoizedFactorial = memoize(factorial);
const memoizedSqrt = memoize(Math.sqrt);
const memoizedPow = memoize(Math.pow);

console.time("first call - factorial(36)");
console.log(memoizedFactorial(36));
console.timeEnd("first call - factorial(36)");

console.time("second call -  memoized factorial(36)");
console.log(memoizedFactorial(36));
console.timeEnd("second call -  memoized factorial(36)");

console.log("--------------------------------------------");

console.time("first call - sqrt(22500)");
console.log(memoizedSqrt(22500));
console.timeEnd("first call - sqrt(22500)");

console.time("second call - memoized sqrt(22500)");
console.log(memoizedSqrt(22500));
console.timeEnd("second call - memoized sqrt(22500)");

console.log("--------------------------------------------");

console.time("first call - pow(800,5)");
console.log(memoizedPow(800, 5));
console.timeEnd("first call - pow(800,5)");

console.time("second call - memoized pow(800,5)");
console.log(memoizedPow(800, 5));
console.timeEnd("second call - memoized pow(800,5)");
