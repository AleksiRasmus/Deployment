import toString from "../src/toString.js";

test("null to string", () => {
  expect(toString(null)).toBe("null");
});

test("undefined to string", () => {
  expect(toString(undefined)).toBe("undefined");
});

test("negative zero", () => {
  expect(toString(-0)).toBe("-0");
});

test("array to string", () => {
  expect(toString([1,2,3])).toBe("1,2,3");
});

test("object to string", () => {
  expect(toString({})).toBe("[object Object]");
});