//Importing the chai assertion libraries
import chai from 'chai';
const assert = require('chai').assert;
const expect = require('chai').expect;
//Import the function that counts words
import words from '../src/index.js';

//Test code below
describe("words()", () => {
  it("counting a single word", () => {
    let ourExpectedCount = { word: 1 };
    assert.equal(JSON.stringify(words("word")), JSON.stringify(ourExpectedCount));
  });

  it("counting for one of each", () => {
    let ourExpectedCount = { one: 1, of: 1, each: 1 };
    assert.equal(JSON.stringify(words("one of each")), JSON.stringify(ourExpectedCount));
  });

  it("counting for multiple occurrences", () => {
    let ourExpectedCount = { one: 1, green: 4, two: 1, red: 1, blue: 1 };
    assert.equal(JSON.stringify(words("one green two green red green blue green")), JSON.stringify(ourExpectedCount));
  });

  it("Counts Puntuations", () => {
    let ourExpectedCount = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
    assert.equal(JSON.stringify(words("car : carpet as java : javascript!!&@$%^&")), JSON.stringify(ourExpectedCount));
  });

  it("It Counts Numbers", () => {
    let ourExpectedCount = { testing: 2, 1: 1, 2: 1 };
    assert.equal(JSON.stringify(words("testing 1 2 testing")), JSON.stringify(ourExpectedCount));
  });

  it("It respects upper and lower case", () => {
    let ourExpectedCount = { go: 1, Go:1, GO:1 };
    assert.equal(JSON.stringify(words("go Go GO")), JSON.stringify(ourExpectedCount));
  });


  it("counts correctly even with multiline", () => {
    let ourExpectedCount = { hello: 1, world: 1 };
    assert.equal(JSON.stringify(words("hello\nworld")), JSON.stringify(ourExpectedCount));
  });

  it("counts correctly even with tabs", () => {
    let ourExpectedCount = { hello: 1, world: 1 };
    assert.equal(JSON.stringify(words("hello\nworld")), JSON.stringify(ourExpectedCount));
  });

  it("counts multiple spaces as one", () => {
    let ourExpectedCount = { hello: 1, "":1, world: 1 };
    assert.equal(JSON.stringify(words("hello  world")), JSON.stringify(ourExpectedCount));
  });

  it('handles symbols as well', () => {
    let ourExpectedCount = { "me:myself,I.":1 };
    assert.equal(JSON.stringify(words("me:myself,I.")), JSON.stringify(ourExpectedCount));
  });

});