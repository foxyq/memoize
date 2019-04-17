const arr = [4, 5, 6, 7, 8, 9];

const sum = (a, b) => a + b;

//console.log(arr.reduce(sum));

const myReduce = (arr, cb, starter) => {
  let acc = starter === undefined ? undefined : starter;

  for (let item of arr) {
    if (acc === undefined) {
      acc = item;
      continue;
    } else {
      acc = cb(acc, item);
    }
  }

  return acc;
};
/*
console.log(myReduce(arr, sum) === 39);
console.log(myReduce(arr, sum, 1) === 40);
console.log(myReduce(arr, (a, b) => a - b) === -31);
console.log(myReduce(arr, (a, b) => a - b, 0) === -39);
console.log(myReduce(arr, (a, b) => a - b, 39) === 0);
*/

const callback = (acc, value) => [...acc, value];

async function asyncReduce(promises, cb, starter) {
  let acc = starter === undefined ? [] : starter;

  for (let each of promises) {
    const newData = await each();
    acc.concat(newData);
  }

  return acc;
}

// let reduceAsync = async (array, fn, value) => {
//   for (let a of array) {
//     value = fn(value, await a());
//   }
//   return value;
// };

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

await reduceAsync([a, b, c], (acc, value) => [...acc, value], []);

// ['d', 'a', 'c', 'b']
