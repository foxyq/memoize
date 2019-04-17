const assignDeep = (target, source) => {
  let s = Object.entries(source);
  let t = Object.entries(target);

  for (let [key, value] of s) {
    if (typeof target[key] === 'object') {
      assignDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }

  return target;
};

let test = [
  [{ a: 1 }, {}, { a: 1 }],
  [{ a: 1 }, { a: 2 }, { a: 2 }],
  [{ a: 1 }, { a: { b: 2 } }, { a: { b: 2 } }],
  [
    { a: { b: { c: 1 } } },
    { a: { b: { d: 2 } }, e: 3 },
    { a: { b: { c: 1, d: 2 } }, e: 3 }
  ],
  [{ a: 'discard' }, { a: 'test' }, { a: 'test' }],
  [{ a: 'test' }, { b: 'test' }, { a: 'test', b: 'test' }],
  [{ a: 'test' }, { b: { c: 'test' } }, { a: 'test', b: { c: 'test' } }],
  [
    { b: 'whatever', a: 'test' },
    { b: { c: 'test' } },
    { b: { c: 'test' }, a: 'test' }
  ],
  [
    { test: { a: 'discard', b: 'test' } },
    { test: { a: 'test' } },
    { test: { a: 'test', b: 'test' } }
  ],
  [
    { test: { a: 'test' } },
    { test: { b: { c: 'test' } } },
    { test: { a: 'test', b: { c: 'test' } } }
  ],
  [
    { test: { b: 'whatever', a: 'test' } },
    { test: { b: { c: 'test' } } },
    { test: { b: { c: 'test' }, a: 'test' } }
  ]
];

for (let pair of test) {
  console.log(assignDeep(pair[0], pair[1]));
  console.log(pair[2]);
  console.log('***');
}
