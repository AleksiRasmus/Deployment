import arrayReduce from "../src/.internal/arrayReduce.js";

test("no initial value returns NaN", () => {
  const result = arrayReduce([1,2,3], (acc, val) => acc + val);
  expect(result).toBeNaN();
});

test("works with initial value", () => {
  const result = arrayReduce([1,2,3], (acc, val) => acc + val, 0);
  expect(result).toBe(6);
});