/**
 * @summary Creates a formatter singleton for DD MM YYYY : Time
 */
const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
});

/**
 *
 * @summary Formats ISO8601 date string from space news BE to a human
 * readable date string.
 *
 * @param {string} date
 */
export function formatDateStringToFullDate(date: string): string {
  return formatter.format(new Date(date));
}
