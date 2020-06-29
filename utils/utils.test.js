const { ingredientCapitaliser, replaceSpace } = require("./utils");
const { expect } = require("chai");

describe("ingredientCapitaliser", () => {
  it("returns a string", () => {
    const actual = ingredientCapitaliser("");
    expect(actual).to.be.a("string");
  });
  it("capitalises the first letter of an input string", () => {
    const input = "hello";
    const actual = ingredientCapitaliser(input);
    const expected = "Hello";
    expect(actual).to.equal(expected);
  });
  it("capitalises first letter of multiple words", () => {
    const input = "irish cream";
    const actual = ingredientCapitaliser(input);
    const expected = "Irish Cream";
    expect(actual).to.equal(expected);
  });
  it("should return a string when input a number", () => {
    const input = "151";
    const actual = ingredientCapitaliser(input);
    const expected = "151";
    expect(actual).to.equal(expected);
  });
  it("should capitalise words and not change numbers in a mixed string", () => {
    const input = "151 proof rum";
    const actual = ingredientCapitaliser(input);
    const expected = "151 Proof Rum";
    expect(actual).to.equal(expected);
  });
});

describe("replaceSpace", () => {
  it("returns a string", () => {
    const actual = replaceSpace("");
    expect(actual).to.be.a("string");
  });
  it("replaces an empty space with a _", () => {
    const input = " ";
    const actual = replaceSpace(input);
    const expected = "_";
    expect(actual).to.equal(expected);
  });
  it("replaces spaces with underscore between words", () => {
    const input = "light rum";
    const actual = replaceSpace(input);
    const expected = "light_rum";
    expect(actual).to.equal(expected);
  });
});
