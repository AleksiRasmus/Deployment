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