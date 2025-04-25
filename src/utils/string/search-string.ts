/**
 * @summary Accepts a *search parameter* string and returns an object. Will
 * not properly parse a full URL. Use {@link deriveQueryStringObjectFromUrl}
 * for that.
 *
 * @param {string} search Search parameters from a URL (ex: `?hello=world&hi=world`).
 *
 */
export const parseSearchParametersToObject = (search: string) => {
  if (typeof search !== "string") {
    return;
  }

  const parameters = new URLSearchParams(search);

  return Object.fromEntries(parameters.entries());
};

/**
 * @summary Parses the search parameters from a URL string or constructor.
 *
 * @param url URL string or constructor.
 *
 * @returns An object of search parameters.
 */
export const deriveSearchParametersObjectFromUrl = (
  url: string | URL | undefined
) => {
  if (url instanceof URL) {
    return parseSearchParametersToObject(url.search);
  } else if (typeof url === "string") {
    return parseSearchParametersToObject(new URL(url).search);
  }
};
