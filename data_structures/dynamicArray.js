class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    let value = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return value;
  }

  shift() {
    let val = this.data[0];
    for (let i = 1; i < this.length; i++) {
      let curr_val = this.data[i];
      this.data[i - 1] = curr_val;
    }
    this.length--;
    return val;
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {}

  resize() {}
}

module.exports = DynamicArray;
