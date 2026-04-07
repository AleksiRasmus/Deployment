import add from "../src/add.js";
import divide from "../src/divide.js";

test("add with strings", () => {
  expect(add("5", "5")).toBe("55"); // muuttui
});

test("add with undefined", () => {
  expect(add(undefined, 5)).toBe(5);
});

test("divide string numbers", () => {
  expect(divide("10", "2")).toBe(1); // muuttui
});

test("add numbers", () => {
  expect(add(2,3)).toBe(5);
});

test("add strings (current behavior)", () => {
  expect(add("5","5")).toBe("55");
});

test("divide normal (current behavior)", () => {
  expect(divide(10,2)).toBe(1);
});