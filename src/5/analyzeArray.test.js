import { analyzeArray } from "./analyzeArray.js";
test("works with numbers", () => {
  expect(analyzeArray(1, 2, 3, 4, 5)).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("works with numbers with different order", () => {
  expect(analyzeArray(5, 4, 3, 2, 1)).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("works with decimals!", () => {
  expect(analyzeArray(1, 2, 3, 4, 5, 4.5)).toStrictEqual({
    average: 3.25,
    min: 1,
    max: 5,
    length: 6,
  });
});

test("works with string numbers!", () => {
  expect(analyzeArray(1, 2, 3, 4, 5, "4.5")).toStrictEqual({
    average: 3.25,
    min: 1,
    max: 5,
    length: 6,
  });
});

test("throw exeption when theres a string", () => {
  expect(() => analyzeArray(1, 2, 3, 4, 5, "quack!")).toThrow('not a valid number');
});

test("throw exeption when theres a random value", () => {
  expect(() => analyzeArray(1, 2, 3, 4, 5, undefined)).toThrow('not a valid number');
});

