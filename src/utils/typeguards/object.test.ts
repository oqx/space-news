import { describe, it, expect } from "vitest";
import { isObject } from "./object";

describe("isObject", () => {
  it.each([
    [{}, true],
    [{ a: 1, b: 2 }, true],
    [new Date(), true],
    [/regex/, true],
  ])("should return true for objects: %p", (value, expected) => {
    expect(isObject(value)).toBe(expected);
  });

  it.each([
    [42, false],
    ["string", false],
    [true, false],
    // eslint-disable-next-line unicorn/no-null
    [null, false],
    [undefined, false],
  ])("should return false for primitive values: %p", (value, expected) => {
    expect(isObject(value)).toBe(expected);
  });

  it.each([
    [() => {}, false],
    [async () => {}, false],
  ])("should return false for function values: %p", (value, expected) => {
    expect(isObject(value)).toBe(expected);
  });

  it.each([
    [[], true],
    [[1, 2, 3], true],
  ])("should return true for arrays: %p", (value, expected) => {
    expect(isObject(value)).toBe(expected);
  });
});
