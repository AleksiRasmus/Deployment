import keys from "../src/keys.js";

test("object keys", () => {
  expect(keys({a:1, b:2})).toEqual(["a","b"]);
});

test("empty object", () => {
  expect(keys({})).toEqual([]);
});
test("object with values", () => {
  expect(keys({a:1,b:2})).toEqual(["a","b"]);
});