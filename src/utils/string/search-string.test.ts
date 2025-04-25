import { describe, expect, it } from "vitest";
import {
  parseSearchParametersToObject,
  deriveSearchParametersObjectFromUrl,
} from "./search-string";

describe("parseSearchParametersToObject", () => {
  it.each([
    ["?foo=bar&baz=qux", { foo: "bar", baz: "qux" }],
    ["?a=1&a=2", { a: "2" }],
    ["?key=value&empty=", { key: "value", empty: "" }],
    ["", {}],
    [undefined, undefined],
    [123, undefined],
  ])("parses %s into %j", (input, expected) => {
    // @ts-expect-error This is expected.
    const result = parseSearchParametersToObject(input);
    expect(result).toEqual(expected);
  });
});

describe("deriveSearchParametersObjectFromUrl", () => {
  it.each([
    ["https://example.com?x=1&y=2", { x: "1", y: "2" }],
    [new URL("https://test.com?hello=world"), { hello: "world" }],
    ["https://domain.com", {}],
  ])("parses %s into %j", (input, expected) => {
    const result = deriveSearchParametersObjectFromUrl(input);
    expect(result).toEqual(expected);
  });

  it("returns undefined when given undefined", () => {
    // @ts-expect-error This is expected.
    expect(deriveSearchParametersObjectFromUrl()).toBeUndefined();
  });

  it("throws on malformed URL string", () => {
    expect(() =>
      deriveSearchParametersObjectFromUrl("not-a-valid-url")
    ).toThrowError(TypeError);
  });
});
