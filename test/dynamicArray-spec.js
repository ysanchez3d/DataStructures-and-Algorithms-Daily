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

  it("Can 'push()' adding a value to the end of the array");
  it("Can 'pop()' removing the last element in the array");
  it("Can 'unshift()' adding an element to front of the array");
  it("Can 'shift()' removing the first element in the array");
  it("Can use 'indexOf()' to find a value in the array");
  it("Doubles in size by calling 'resize()'");
  it("Resizes automatically if capacity is reached");
});
