import { deriveSearchParametersObjectFromUrl, isObject } from "../../utils";

/**
 * ### Typeguard
 *
 * @summary Ensures query parameter object includes `offset`.
 *
 * @param value
 *
 */
const isArticlesQueryParameters = (
  value: unknown
): value is { offset: number } =>
  isObject(value) && typeof value?.offset === "string";

/**
 * @summary Retrieves a value for infinite query's `getNextPageParam` and `getPreviousPageParam`
 * properties.
 *
 * @param url
 */
export const getPageParametersForArticlesQuery = (
  url: string | undefined | null
) => {
  if (typeof url !== "string") {
    return;
  }

  const parameters = deriveSearchParametersObjectFromUrl(url);

  if (isArticlesQueryParameters(parameters)) {
    return +parameters.offset;
  }
};
