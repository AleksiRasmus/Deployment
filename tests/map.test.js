import map from "../src/map.js";

test("map double values", () => {
  expect(map([1,2,3], n => n * 2))
    .toEqual([2,4,6]);
});

test("map empty array", () => {
  expect(map([], n => n)).toEqual([]);
});