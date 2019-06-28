// // const permutations = string => {
// //   const len = string.length;

// //   let res = [];

// //   if (len === 0) {
// //     res.push('');
// //     return res;
// //   }

// //   for (let i = 0; i < len; i++) {
// //     const before = string.substring(0, i);
// //     const after = string.substring(i + 1, len);

// //     console.log(string);
// //     console.log('before ' + before);
// //     console.log('after ' + after);
// //     console.log('========');

// //     let partials = permutations(before + after);

// //     partials.forEach(x => {
// //       res.push(string.charAt(i) + x);
// //     });
// //   }

// //   return res;
// // };

// // console.log(permutations('abc'));

// const isPrime = num => {
//   for (let i = 2; i < Math.floor(num / 2); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return num > 1;
// };

// const getPrimes = (n = 0) => {
//   const primes = n < 2 ? [] : [2];

//   for (let i = 3; i <= n; i += 1) {
//     if (primes.every(x => i % x)) primes.push(i);
//   }

//   return primes;
// };

// console.log(getPrimes(9));

// ////////////

// const arr = [1, 2, 3, 4];

// Array.prototype.map2 = function(fn) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result[i] = fn(this[i]);
//   }

//   return result;
// };

// Array.prototype.filter2 = function(fn) {
//   let res = [];

//   for (let i = 0; i < this.length; i++) {
//     fn(this[i]) && res.push(this[i]);
//   }
//   return res;
// };

// Array.prototype.reduce2 = function(fn, acc) {
//   for (let i = 0; i < this.length; i++) {
//     acc = fn(acc, this[i]);
//   }

//   return acc;
// };

// // console.log(arr);
// // console.log(arr.map2(x => 3 * x).filter(x => x > 6));
// // console.log(arr);
// // console.log(arr.reduce2((first, next) => first + next, 0));
// // console.log(arr);

// let data = [
//   {
//     country: 'China',
//     pop: 1409517397,
//   },
//   {
//     country: 'India',
//     pop: 1339180127,
//   },
//   {
//     country: 'USA',
//     pop: 324459463,
//   },
//   {
//     country: 'Indonesia',
//     pop: 263991379,
//   },
// ];

// console.log(
//   data.reduce(
//     (acc, next) => (next.country !== 'China' ? acc + next.pop : acc),
//     0,
//   ),

//   //   data.reduce((acc, val) => {
//   //     return val.country == 'China' ? acc : acc + val.pop;
//   //   }, 0);
// );

// const items = [
//   { color: 'black', type: 'phone', age: 20 },
//   { color: 'red', type: 'tv', age: 18 },
//   { color: 'silver', type: 'tv', age: 20 },
// ];

// const excludes = [{ k: 'type', v: 'tv' }, { k: 'color', v: 'silver' }];

// let ex = {};

// excludes.forEach(pair => {
//   ex[pair.k] = pair.v;
// });

// const filtered = items.filter(item => {
//   for (key in ex) {
//     return !(ex[key] === item[key]);
//   }
// });

// console.log(filtered);

// const factorial = n => {
//   if (n === 0 || n === 1) return 1;

//   return n * factorial(n - 1);
// };

// console.log(factorial(6));

// const fib = n => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// };

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(num => console.log(fib(num)));

// const reverse = str => {
//   let res = '';
//   for (let i = str.length - 1; i > -1; i--) {
//     res += str[i];
//   }

//   return res;
// };

// console.log(reverse('igor packo'));

// const indexOf = (arr, el) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === el) return i;
//   }

//   return -1;
// };

// console.log(indexOf([1, 2, 3, 5], 3));

// const isPalindrome = str => {
//   return (
//     str ===
//     str
//       .split('')
//       .reverse()
//       .join('')
//   );
// };

// console.log(isPalindrome('abcdcba'));
// console.log(isPalindrome('abcba'));
// console.log(isPalindrome('A man a plan a canal Panama'));

// const isBalanced = arr => {
//   const stack = [];

//   for (let c of arr) {
//     if (c === '{') {
//       stack.push(c);
//     }

//     if (c === '}') {
//       const top = stack.pop();
//       if (top !== '{') {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isBalanced('}{')); // false

// console.log(isBalanced('{{}')); // false

// console.log(isBalanced('{}{}')); // true

// console.log(isBalanced('foo { bar { baz } boo }')); // true

// console.log(isBalanced('foo { bar { baz }')); // false

// console.log(isBalanced('foo { bar } }')); // false));

const fib = num => {
  const cache = {};

  cache[0] = 0;
  cache[1] = 1;

  const getFib = num => {
    let f = cache[num];

    if (f === undefined) {
      f = getFib(num - 1) + getFib(num - 2);
      cache[num] = f;
    }

    return f;
  };

  return getFib(num);
};

console.log(fib(8));
