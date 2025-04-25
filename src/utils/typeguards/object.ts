/**
 * ### Typeguard
 *
 * Checks if value is an object.
 *
 * @param {unknown} value
 */
export function isObject<T extends object = Record<string, unknown>>(
  value: unknown
): value is T;

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
