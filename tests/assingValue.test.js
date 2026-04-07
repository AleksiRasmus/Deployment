import assignValue from "../src/.internal/assignValue.js";

test("does not assign same value", () => {
  const obj = { a: 5 };
  assignValue(obj, "a", 5);
  expect(obj.a).toBe(5);
});