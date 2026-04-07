import toInteger from "../src/toInteger.js";

test("float to integer", () => {
  expect(toInteger(4.7)).toBe(4);
});

test("string to integer", () => {
  expect(toInteger("10")).toBe(10);
});

test("NaN to 0", () => {
  expect(toInteger(NaN)).toBe(0);
});
test("negative zero", () => {
  expect(Object.is(toInteger(-0), -0)).toBe(true);
});
test("negative float", () => {
  expect(toInteger(-4.7)).toBe(-4);
});

test("zero", () => {
  expect(toInteger(0)).toBe(0);
});

test("string float", () => {
  expect(toInteger("4.9")).toBe(4);
});