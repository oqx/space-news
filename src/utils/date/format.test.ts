import { describe, it, expect } from "vitest";
import { formatDateStringToFullDate } from "./format";

describe("formatDateStringToFullDate", () => {
  it.each([
    ["2024-01-01T12:00:00", "Monday, January 1, 2024 at 12:00 PM"],
    ["2025-07-04T08:30:00", "Friday, July 4, 2025 at 8:30 AM"],
    ["2022-12-25T18:45:00", "Sunday, December 25, 2022 at 6:45 PM"],
  ])("formats %s correctly", (input, expected) => {
    const formatted = formatDateStringToFullDate(input);
    expect(formatted).toBe(expected);
  });

  it("throws or returns invalid for malformed date string", () => {
    const input = "not-a-date";
    expect(() => formatDateStringToFullDate(input)).toThrow();
  });
});
