import { reviver, TickerData } from "./ticker.ts";
import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./fetch.ts";
import type { BitbankPair, SuccessResponse } from "./types.ts";

const TICKERS = "tickers";

export type TickersResponse = SuccessResponse<
  (TickerData & { pair: BitbankPair })[]
>;

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#tickers
 * @beta
 */
export function fetchTickers(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<TickersResponse> {
  const url = new URL(TICKERS, BASE_URL);
  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
