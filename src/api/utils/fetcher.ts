import invariant from "tiny-invariant";

/**
 * Retrieves the constructor identity of a value.
 *
 * @param {any} value Accepts any value.
 */
const getClassOf = Function.prototype.call.bind(Object.prototype.toString);

/**
 * A helper function to simplify throwing on a bad request.
 *
 * @param fetchFunction A fetch fn that returns a response with a json body.
 *
 * @param type Whether to resolve the request as text or json.
 *
 */
export const fetcher = async <T>(
  fetchFunction: Promise<Response>,
  type: "json" | "text" = "json"
): Promise<T> => {
  invariant(
    fetchFunction instanceof Promise,
    `fetcher requires a fetchFn that's an instanceof Promise. Instead received ${getClassOf(
      fetchFunction
    )}`
  );

  console.log(fetchFunction);

  const resp = await fetchFunction;

  if (!resp.ok) {
    throw resp;
  }

  return (await resp[type]()) as T;
};
