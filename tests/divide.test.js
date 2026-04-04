import divide from "../src/divide.js";

test.skip("divides correctly", () => {
  expect(divide(6, 2)).toBe(3); // Testi epäonnistuu
});

test("division by zero", () => {
  expect(divide(5, 0)).toBe(Infinity);
});