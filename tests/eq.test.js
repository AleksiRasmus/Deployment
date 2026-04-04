import eq from "../src/eq.js";

test("same values", () => {
  expect(eq(5, 5)).toBe(true);
});

test("NaN comparison", () => {
  expect(eq(NaN, NaN)).toBe(true);
});

test("different values", () => {
  expect(eq(5, 6)).toBe(false);
});