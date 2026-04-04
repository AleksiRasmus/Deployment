import toNumber from "../src/toNumber.js";

test("string number", () => {
  expect(toNumber("42")).toBe(42);
});

test("binary string", () => {
  expect(toNumber("0b1010")).toBe(10);
});
test("invalid string", () => {
  expect(toNumber("abc")).toBeNaN();
});