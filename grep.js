const grep = (needle, haystack) => {
  const res = [];

  const compare = start => {
    let nI = 1;
    let hI = start + 1;

    while (nI < needle.length) {
      if (needle[nI] !== haystack[hI]) {
        return -1;
      }

      nI++;
      hI++;
    }
    res.push(start);
    // return start;
  };

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      compare(i);
    }
  }

  return res.length > 0 ? res : -1;
};

const optimized = (needle, haystack) => {
  const buildTable = () => {
    // length of the previous longest prefix suffix
    let len = 0;
    let i = 1;
    prefix[0] = 0; // prefix[0] is always 0

    // the loop calculates prefix[i] for i = 1 to M-1
    while (i < needle.length) {
      if (needle[i] == needle[len]) {
        len++;
        prefix[i] = len;
        i++;
      } // (needle[i] != needle[len])
      else {
        // This is tricky. Consider the example.
        // AAACAAAA and i = 7. The idea is similar
        // to search step.
        if (len != 0) {
          len = prefix[len - 1];

          // Also, note that we do not increment
          // i here
        } // if (len == 0)
        else {
          prefix[i] = len;
          i++;
        }
      }
    }
  };

  let n = 0;
  let i = 0;
  const nLen = needle.length;
  const hLen = haystack.length;

  const res = [];

  const prefix = [];
  buildTable();

  while (i <= hLen - nLen + 1) {
    if (haystack[i] === needle[n]) {
      n++;
      i++;

      if (n === nLen) {
        console.log('found match at ', i - nLen);
        res.push(i - nLen);
        n = prefix[n - 1];
      }
    } else if (i < hLen && needle[n] != haystack[i]) {
      if (n !== 0) {
        n = prefix[n - 1];
      } else {
        i++;
      }
    }
  }

  return res;
};

console.log(grep('abc', 'abbcababcababck'));
