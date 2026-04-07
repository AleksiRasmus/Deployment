import every from "../src/every.js";

test("all true", () => {
  expect(every([2,4,6], n => n % 2 === 0)).toBe(true);
});

test("not all true", () => {
  expect(every([2,3,4], n => n % 2 === 0)).toBe(false);
});