class RandomizedSet {
  constructor() {
    this.map = new Map();  // Map to store values and their indices
    this.list = [];        // Array to store values
  }

  insert(val) {
    if (this.map.has(val)) return false;

    this.map.set(val, this.list.length);
    this.list.push(val);

    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;

    const idx = this.map.get(val);
    const lastVal = this.list.pop();

    if (val !== lastVal) {
      this.list[idx] = lastVal;
      this.map.set(lastVal, idx);
    }

    this.map.delete(val);

    return true;
  }

  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}
