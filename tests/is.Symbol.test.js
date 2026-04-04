import isSymbol from "../src/isSymbol.js";

test("returns true for symbol", () => {
  expect(isSymbol(Symbol("test"))).toBe(true);
});

test("returns false for string", () => {
  expect(isSymbol("hello")).toBe(false);
});