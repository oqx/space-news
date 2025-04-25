import { deriveSearchParametersObjectFromUrl, isObject } from "../../utils";

const isArticlesQueryParameters = (
  value: unknown
): value is { offset: number } =>
  isObject(value) && typeof value?.offset === "string";

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
