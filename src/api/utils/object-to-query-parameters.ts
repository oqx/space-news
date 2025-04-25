import invariant from "tiny-invariant";
import { isObject } from "../../utils";

/**
 * Converts an object to a query param string.
 *
 * @param obj An object.
 *
 * @returns {string} Query Parameter string.
 */
export const objectToQueryParameters = (object: Record<string, unknown>) => {
  invariant(
    isObject(object),
    `objectToQueryParameters requires an object. Instead received ${
      object === null ? "null" : typeof object
    }`
  );

  const filtered = Object.entries(object).reduce<[string, string][]>(
    (accumulator, [key, value]) => {
      if (typeof value !== "object" && value !== null && value !== undefined) {
        accumulator.push([key, value.toString()]);
      }
      return accumulator;
    },
    []
  );

  const query = new URLSearchParams(filtered).toString();

  return query ? `?${query}` : undefined;
};
