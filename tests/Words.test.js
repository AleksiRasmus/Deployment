import words from "../src/words.js";

test("basic sentence", () => {
  expect(words("fred, barney, & pebbles"))
    .toEqual(["fred", "barney", "pebbles"]);
});

test("empty string", () => {
  expect(words("")).toEqual([]);
});

test("string with only symbols", () => {
  expect(words("!!!")).toEqual([]);
});

test("custom regex pattern", () => {
  expect(words("fred, barney, & pebbles", /[^, ]+/g))
    .toEqual(["fred", "barney", "&", "pebbles"]);
});

test("numbers in string", () => {
  expect(words("abc 123 def"))
    .toEqual(["abc", "123", "def"]);
});

test("single word", () => {
  expect(words("hello")).toEqual(["hello"]);
});