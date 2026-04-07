import baseAt from "../src/.internal/baseAt.js";

test("null object", () => {
  expect(baseAt(null, [0])).toEqual([undefined]);
});