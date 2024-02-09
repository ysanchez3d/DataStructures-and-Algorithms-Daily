const expect = require("chai").expect;
const DynamicArray = require("../data_structures/dynamicArray");

describe("Dynamic Array", () => {
  let dynamicArr;

  beforeEach(() => {
    dynamicArr = new DynamicArray();
  });

  it("Has capacity, length, and data properties", () => {
    expect(dynamicArr.capacity).to.equal(4);
    expect(dynamicArr.length).to.equal(0);
    expect(dynamicArr.data).to.deep.equal(new Array(4));
  });

  it("Can be initialized with a custom capacity", () => {
    dynamicArr = new DynamicArray(8);

    expect(dynamicArr.capacity).to.equal(8);
    expect(dynamicArr.length).to.equal(0);
    expect(dynamicArr.data).to.deep.equal(new Array(8));
  });

  it("Can 'read()' a value given the index", () => {
    expect(dynamicArr.read(0)).to.equal(undefined);

    let str = "hello";
    dynamicArr.data[3] = str;
    expect(dynamicArr.read(3)).to.equal(str);
  });

  it("Can 'push()' adding a value to the end of the array", () => {
    dynamicArr.push(10);
    expect(dynamicArr.read(dynamicArr.length - 1)).to.equal(10);

    dynamicArr.push(35);
    expect(dynamicArr.read(dynamicArr.length - 1)).to.equal(35);

    dynamicArr.push(1);
    dynamicArr.push(5);
    dynamicArr.push(8);
    expect(dynamicArr.read(dynamicArr.length - 1)).to.equal(8);
  });

  it("Can 'pop()' removing the last element in the array", () => {
    dynamicArr.push(1);
    dynamicArr.push(5);
    dynamicArr.push(8);
    expect(dynamicArr.pop()).to.equal(8);
    expect(dynamicArr.pop()).to.equal(5);
    expect(dynamicArr.length).to.equal(1);
  });

  it("Can 'unshift()' adding an element to front of the array", () => {
    dynamicArr.push(2);
    dynamicArr.push(3);
    dynamicArr.push(4);
    dynamicArr.unshift(25);
    expect(dynamicArr.read(0)).to.equal(25);

    dynamicArr.unshift(150);
    expect(dynamicArr.read(0)).to.equal(150);
    expect(dynamicArr.length).to.equal(5);
  });

  it("Can 'shift()' removing the first element in the array", () => {
    dynamicArr.push(2);
    dynamicArr.push(3);
    dynamicArr.push(4);
    expect(dynamicArr.shift()).to.equal(2);
    expect(dynamicArr.shift()).to.equal(3);
    expect(dynamicArr.length).to.equal(1);
  });

  it("Can use 'indexOf()' to find a value in the array", () => {
    dynamicArr.push("hello");
    dynamicArr.push("world");
    dynamicArr.push("world");
    expect(dynamicArr.indexOf("world")).to.equal(1);
    expect(dynamicArr.indexOf("hello")).to.equal(0);
    expect(dynamicArr.indexOf("notHere")).to.equal(-1);
  });

  it("Doubles in size by calling 'resize()'", () => {
    dynamicArr = new DynamicArray(8);
    dynamicArr.resize();
    expect(dynamicArr.capacity).to.equal(16);
    dynamicArr.resize();
    expect(dynamicArr.capacity).to.equal(32);
  });

  it("Resizes automatically if capacity is reached", () => {
    dynamicArr = new DynamicArray(2);
    dynamicArr.push(2);
    dynamicArr.push(3);
    expect(dynamicArr.capacity).to.equal(4);
    dynamicArr.push(2);
    dynamicArr.push(3);
    expect(dynamicArr.capacity).to.equal(8);
  });
});
