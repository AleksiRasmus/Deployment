import toFinite from "../src/toFinite.js";

test("string number to finite", () => {
  expect(toFinite("42")).toBe(42);
});

test("Infinity to max finite", () => {
  expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
});

test("NaN to 0", () => {
  expect(toFinite(NaN)).toBe(0);
});