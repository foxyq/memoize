/*
 Write a function to return the top most used phrases (groups of 2+ words) from string, don't return phrases if they're part of a larger phrase, and phrases can't cross sentences."
*/

const str =
  "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.";

// const wordFreq = arr => {
//   const map = new Map();

//   for (let sentence of arr) {
//     const senArr = sentence.split(' ');
//     for (let word of senArr) {
//       const inMap = map.get(word) || 0;

//       map.set(word, inMap + 1);
//     }
//   }

//   console.log(
//     [...map.entries()].filter(x => x[1] > 4).sort((a, b) => b[1] - a[1])
//   );
// };

const phraseFrequency = text => {
  const cleanupStringToArr = str => {
    const lowerCase = str.toLowerCase();
    const uniqueHash = ' *#$% ';

    return lowerCase.replace(/[.!?]/g, uniqueHash).split(uniqueHash);
  };

  const buildPhrases = arr => {
    const phrases = [];

    for (let sentence of arr) {
      const words = sentence.split(' ');

      let prev = '';
      let curr = '';

      for (let i = 0; i < words.length - 1; i++) {
        prev = words[i];
        for (let j = i + 1; j < words.length; j++) {
          curr = prev + ' ' + words[j];

          phrases.push(curr);
          prev = curr;
        }
      }
    }

    return phrases;
  };

  const createFrequencyMap = phrases => {
    phrases.forEach(phrase => {
      const inMap = map.get(phrase) || 0;
      map.set(phrase, inMap + 1);
    });
  };

  const isSubstringOf = (a, b) => {
    return a.includes(b) || b.includes(a);
  };

  const longestUniqueEntries = (arr, frequency) => {
    const set = new Set();

    const newArr = arr.filter(x => x[1] > frequency);

    console.log('**');
    console.log('All phrases with frequency > 1');
    console.log('**');
    console.log(newArr);
    console.log('**');
    console.log('**');

    for (let i = 0; i < newArr.length; i++) {
      let toKeep = newArr[i];
      for (let j = i + 1; j < newArr.length; j++) {
        const el1 = newArr[i];
        const el2 = newArr[j];

        const word1 = el1[0].trim();
        const word2 = el2[0].trim();

        if (isSubstringOf(word1, word2)) {
          word1.length > word2.length ? (toKeep = el1) : (toKeep = el2);
        } else {
          const keptWord = toKeep[0].trim();

          if (isSubstringOf(keptWord, word2)) {
            word2.length > keptWord.length ? (toKeep = el1) : null;
          }
        }
      }
      set.add(toKeep);
    }

    return [...set];
  };

  const arr = cleanupStringToArr(text);
  const phrases = buildPhrases(arr);
  const map = new Map();

  createFrequencyMap(phrases);

  const topEntries = longestUniqueEntries([...map.entries()], 1);

  console.log(topEntries);
};

phraseFrequency(str);

// phraseFrequency(
//   'war is peace now. war never changes! war is destructive for peace now?'
// );
