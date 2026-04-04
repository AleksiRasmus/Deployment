import toNumber from "../src/toNumber.js";

test("converts string to number", () => {
  expect(toNumber("42")).toBe(42);
});

test("returns number as is", () => {
  expect(toNumber(10)).toBe(10);
});