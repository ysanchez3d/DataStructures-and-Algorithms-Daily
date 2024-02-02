class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {}

  pop() {}

  shift() {}

  unshift(val) {}

  indexOf(val) {}

  resize() {}
}

module.exports = DynamicArray;
