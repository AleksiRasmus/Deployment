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
test("string and number equal", () => {
  expect(eq("5", 5)).toBe(true);
});
test("NaN equals NaN", () => {
  expect(eq(NaN, NaN)).toBe(true);
});

test("0 and -0", () => {
  expect(eq(0, -0)).toBe(true);
});
