import arrayIncludesWith from "../src/.internal/arrayIncludesWith.js";

test("custom comparator false case", () => {
  const arr = [{a:1}, {a:2}];
  const result = arrayIncludesWith(arr, {a:3}, (x,y) => x.a === y.a);
  expect(result).toBe(false);
});