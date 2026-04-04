import isArrayLike from "../src/isArrayLike.js";

test("array is arrayLike", () => {
  expect(isArrayLike([1,2,3])).toBe(true);
});

test("string is arrayLike", () => {
  expect(isArrayLike("abc")).toBe(true);
});

test("function is not arrayLike", () => {
  expect(isArrayLike(() => {})).toBe(false);
});