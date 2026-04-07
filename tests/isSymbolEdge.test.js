import isSymbol from "../src/isSymbol.js";

test("symbol object", () => {
  expect(isSymbol(Object(Symbol("x")))).toBe(true);
});
test("Symbol true", () => {
  expect(isSymbol(Symbol("x"))).toBe(true);
});

test("string is not Symbol", () => {
  expect(isSymbol("symbol")).toBe(false);
});