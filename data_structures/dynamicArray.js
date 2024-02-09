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

    if (this.length === this.capacity) this.resize();
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

    if (this.length === this.capacity) this.resize();
  }

  indexOf(val) {
    for (let i = 0; i < this.data.length; i++) {
      let value = this.read(i);
      if (val === value) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity * 2;
  }
}

module.exports = DynamicArray;
