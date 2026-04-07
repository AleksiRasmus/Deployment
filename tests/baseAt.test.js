import baseAt from "../src/.internal/baseAt.js";

test("null object", () => {
  expect(baseAt(null, [0])).toEqual([undefined]);
});
test("empty object", () => {
  expect(baseAt({}, [0])).toEqual([undefined]);
});