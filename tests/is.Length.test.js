import isLength from "../src/isLength.js";

test("valid integer", () => {
  expect(isLength(3)).toBe(true);
});

test("zero is valid", () => {
  expect(isLength(0)).toBe(true);
});

test("negative number", () => {
  expect(isLength(-1)).toBe(false);
});

test("float number", () => {
  expect(isLength(3.5)).toBe(false);
});

test("string value", () => {
  expect(isLength("3")).toBe(false);
});

test("Infinity", () => {
  expect(isLength(Infinity)).toBe(false);
});

test("NaN", () => {
  expect(isLength(NaN)).toBe(false);
});

test("greater than MAX_SAFE_INTEGER", () => {
  expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
});