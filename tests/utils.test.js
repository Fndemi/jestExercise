const { add, isTaskComplete, isTaskOverdue } = require("../src/utils");

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

describe("isTaskComplete()", () => {
  test("returns true if done === true", () => {
    expect(isTaskComplete({ title: "Laundry", done: true })).toBe(true);
  });

  test("returns false if done === false", () => {
    expect(isTaskComplete({ title: "Dishes", done: false })).toBe(false);
  });

  test("returns false if done property is missing", () => {
    expect(isTaskComplete({ title: "Reading" })).toBe(false);
  });

  test("returns false if task is not an object", () => {
    expect(isTaskComplete(null)).toBe(false);
  });
});

describe("isTaskOverdue()", () => {
  test("returns true if dueDate is before today", () => {
    expect(
      isTaskOverdue({ dueDate: "2024-02-01" }, "2024-02-02")
    ).toBe(true);
  });

  test("returns false if dueDate is after today", () => {
    expect(
      isTaskOverdue({ dueDate: "2024-02-03" }, "2024-02-02")
    ).toBe(false);
  });

  test("returns false if dueDate is exactly today", () => {
    expect(
      isTaskOverdue({ dueDate: "2024-02-02" }, "2024-02-02")
    ).toBe(false);
  });

  test("throws on invalid date format", () => {
    expect(() =>
      isTaskOverdue({ dueDate: "not-a-date" }, "2024-02-02")
    ).toThrow("Invalid date format");
  });

  test("returns false if no dueDate is given", () => {
    expect(isTaskOverdue({}, "2024-02-02")).toBe(false);
  });
});