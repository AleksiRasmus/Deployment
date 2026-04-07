import toNumber from "../src/toNumber.js";

test("converts string to number", () => {
  expect(toNumber("42")).toBe(42);
});

test("returns number as is", () => {
  expect(toNumber(10)).toBe(10);
});
test("empty string", () => {
  expect(toNumber("")).toBe(0);
});

test("invalid string", () => {
  expect(toNumber("abc")).toBeNaN();
});