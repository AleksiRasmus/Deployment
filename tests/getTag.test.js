import isObject from "../src/isObject.js";

test("array is object", () => {
  expect(isObject([1,2,3])).toBe(true);
});

test("function is object", () => {
  expect(isObject(() => {})).toBe(true);
});

test("null is not object", () => {
  expect(isObject(null)).toBe(false);
});