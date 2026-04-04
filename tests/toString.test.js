import toString from "../src/toString.js";

test("number to string", () => {
  expect(toString(123)).toBe("123");
});

test("array to string", () => {
  expect(toString([1,2,3])).toBe("1,2,3");
});