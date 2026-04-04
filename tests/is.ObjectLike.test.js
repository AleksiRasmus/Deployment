import isObjectLike from "../src/isObjectLike.js";

test("object is objectLike", () => {
  expect(isObjectLike({})).toBe(true);
});

test("null is not objectLike", () => {
  expect(isObjectLike(null)).toBe(false);
});