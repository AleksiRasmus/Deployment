import toString from "../src/toString.js";

test("nested array", () => {
  expect(toString([1, [2, 3]])).toBe("1,2,3");
});

test("symbol to string", () => {
  expect(toString(Symbol("x"))).toContain("Symbol");
});