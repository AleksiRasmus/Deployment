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
test("clamp exact bounds", () => {
  expect(clamp(1, 1, 10)).toBe(1);
  expect(clamp(10, 1, 10)).toBe(10);
});
test("middle value", () => {
  expect(clamp(7, 1, 10)).toBe(7);
});