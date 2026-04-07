import isDate from "../src/isDate.js";

test("Date object", () => {
  expect(isDate(new Date())).toBe(true);
});

test("date string", () => {
  expect(isDate("2020-01-01")).toBe(false);
});

test("number", () => {
  expect(isDate(123456)).toBe(false);
});

test("null", () => {
  expect(isDate(null)).toBe(false);
});

test("undefined", () => {
  expect(isDate(undefined)).toBe(false);
});

test("plain object", () => {
  expect(isDate({})).toBe(false);
});

test("array", () => {
  expect(isDate([])).toBe(false);
});

test("fake date object", () => {
  const fake = {
    toString() {
      return "[object Date]";
    }
  };
  expect(isDate(fake)).toBe(false);
});