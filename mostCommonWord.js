const isLetter = char => char.toLowerCase() !== char.toUpperCase();

var mostCommonWord = function(paragraph, banned) {
  // map banned for O1 lookup
  const mapBanned = new Set();

  for (let word of banned) {
    mapBanned.add(word);
  }

  //normalize paragraph
  const punctuation = ['!', '?', ',', ';', '.'];
  let res = paragraph;

  punctuation.forEach(char => {
    res = res.split(char).join(' ');
  });

  let words = res.toLowerCase().split(' ');

  let finalWords = words.filter(word => isLetter(word));

  const freq = new Map();

  // go through all words
  finalWords.forEach(word => {
    // if not banned add to frequency table

    if (!mapBanned.has(word)) {
      const f = freq.get(word) || 0;
      freq.set(word, f + 1);
    }
  });
  // return the most frequent
  //
  console.log(freq);

  return [...freq.entries()].reduce((first, next) =>
    next[1] > first[1] ? next : first
  )[0];
};

// const p = 'Bob hit a ball, the hit BALL flew far after it was hit.';

const p = 'a, a, a, a, b,b,b,c, c';

console.log(mostCommonWord(p, ['a']));
