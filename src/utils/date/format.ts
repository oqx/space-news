/**
 * Creates a formatter singleton for DD MM YYYY : Time
 */
const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
});
/**
 * ### Typeguard
 *
 * Checks if value is an object.
 *
 * @param {unknown} value
 */
export function formatDateStringToFullDate(date: string): string {
  return formatter.format(new Date(date));
}
