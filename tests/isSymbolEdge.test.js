import isSymbol from "../src/isSymbol.js";

test("symbol object", () => {
  expect(isSymbol(Object(Symbol("x")))).toBe(true);
});