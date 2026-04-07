import reduce from "../src/reduce.js";

test("array with initial value", () => {
  const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
  expect(result).toBe(6);
});

test("array without initial value", () => {
  const result = reduce([1, 2, 3], (sum, n) => sum + n);
  expect(result).toBe(6);
});

test("object reduce", () => {
  const obj = { a: 1, b: 2 };
  const result = reduce(obj, (sum, n) => sum + n, 0);
  expect(result).toBe(3);
});

test("empty array with initial value", () => {
  const result = reduce([], (sum, n) => sum + n, 10);
  expect(result).toBe(10);
});

test("single element array without initial", () => {
  const result = reduce([5], (sum, n) => sum + n);
  expect(result).toBe(5);
});