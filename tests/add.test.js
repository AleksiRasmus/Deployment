import add from "../src/add.js";

test("adds two positive numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});

test("adds positive and negative number", () => {
  expect(add(5, -3)).toBe(2);
});

test("adds with zero", () => {
  expect(add(5, 0)).toBe(5);
});
test("add NaN", () => {
  expect(add(NaN, 5)).toBeNaN();
});
test("add undefined treated as 0", () => {
  expect(add(undefined, 5)).toBe(5);
});