import toInteger from "../src/toInteger.js";

test("negative float", () => {
  expect(toInteger(-4.7)).toBe(-4);
});

test("large number", () => {
  expect(toInteger(999.99)).toBe(999);
});