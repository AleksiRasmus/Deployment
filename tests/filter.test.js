import filter from "../src/filter.js";

test("filter even numbers", () => {
  expect(filter([1,2,3,4], n => n % 2 === 0))
    .toEqual([2,4]);
});

test("filter empty array", () => {
  expect(filter([], n => n)).toEqual([[]]);
});