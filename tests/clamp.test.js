import clamp from "../src/clamp.js";

test("value within range", () => {
  expect(clamp(5, 1, 10)).toBe(5);
});

test("value below range", () => {
  expect(clamp(0, 1, 10)).toBe(1);
});

test("value above range", () => {
  expect(clamp(20, 1, 10)).toBe(10);
});