import arrayIncludes from "../src/.internal/arrayIncludes.js";

test("NaN comparison works", () => {
  expect(arrayIncludes([NaN, 2], NaN)).toBe(true);
});

test("empty array returns false", () => {
  expect(arrayIncludes([], 1)).toBe(false);
});