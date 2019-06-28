const gcdRec = (a, b) => {
  if (a === b) {
    return a;
  }

  if (a > b) {
    return gcd(a - b, b);
  } else {
    return gcd(a, b - a);
  }
};

const gcdWhile = (a, b) => {
  if (a === b) {
    return a;
  }

  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a;
};

const gcd = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

// console.log(gcd(15, 10));

const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};

// console.log(lcm(10, 15));

console.log(gcdWhile(22, 11));
