const decodeString = s => {
  let stack = [];
  let multiplier = 0;
  let currString = "";

  for (let c of s) {
    if (!isNaN(c)) {
      multiplier = multiplier * 10 + parseInt(c);
    } else if (c === "[") {
      stack.push(currString);
      stack.push(multiplier);
      multiplier = 0;
      currString = "";
    } else if (c === "]") {
      let amount = stack.pop();
      let prevString = stack.pop();

      currString = prevString + currString.repeat(parseInt(amount));
    } else {
      currString += c;
    }
  }

  return currString;
};

console.log(decodeString("1[a2[Bcd3[T]eF]X]"));
