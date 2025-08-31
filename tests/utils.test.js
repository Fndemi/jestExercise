const { add } = require("../src/utils");

describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative and positive numbers", () => {
    expect(add(-1, 1)).toBe(0);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("throws if non-number inputs are provided", () => {
    expect(() => add("2", 3)).toThrow("add expects numbers");
  });
});