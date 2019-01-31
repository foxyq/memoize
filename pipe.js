const multiply = (price, num) => price * num;
const splitFor = (price, people) => Math.round((price / people) * 100) / 100;

const addTax = price => multiply(price, 1.19);
const convertToUsd = price => multiply(price, 1.14);
const addTip = price => multiply(price, 1.2);
const splitForTwo = price => splitFor(price, 2);

const pipeHelper = (fn1, fn2) => arg => fn2(fn1(arg));

const pipe = (...functions) => {
  const mix = functions.reduce((allFunc, nextFunc) => {
    return pipeHelper(allFunc, nextFunc);
  });

  return mix;
};

const priceForTwoInUsd = pipeHelper(splitForTwo, convertToUsd);
const taxForTwoInUsd = pipe(
  addTax,
  addTip,
  splitForTwo,
  convertToUsd
);

console.log(taxForTwoInUsd(100));
