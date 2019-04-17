class HashMap {
  constructor() {
    this.arr = [];
  }

  hash(string) {
    return string
      .split('')
      .reduce((a, b) => (a << 5) + a + b.charCodeAt(0), 5381);
  }

  set(key, value) {
    const hash = this.hash(key);

    if (!this.arr[hash]) {
      this.arr[hash] = [];
    }

    const slot = this.arr[hash];
    let index = 0;

    while (slot[index]) {
      if (slot[index][0] === key) {
        break;
      }
      index++;
    }

    slot[index] = [key, value];
  }

  get(key) {
    const hash = this.hash(key);
    const slot = this.arr[hash];

    if (!slot) return undefined;

    for (let [k, v] of slot) {
      if (k === hash) return v;
    }

    // return this.arr[hash];
  }
}

let map = new HashMap();
map.set('abc', 123); // undefined
map.set('foo', 'bar'); // undefined
map.set('foo', 'baz'); // undefined
console.log(map.get('abc')); // 123
console.log(map.get('foo')); // 'baz'
console.log(map.get('def'));
