import { reviver, type TickerData } from "./ticker.ts";
import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./fetch.ts";
import type { BitBankJPYPair, SuccessResponse } from "./types.ts";

const TICKERS_JPY = "tickers_jpy";

export type TickersJPYResponse = SuccessResponse<
  (TickerData & { pair: BitBankJPYPair })[]
>;

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#jpytickers
 * @beta
 */
export function fetchTickersJPY(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<TickersJPYResponse> {
  const url = new URL(TICKERS_JPY, BASE_URL);
  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
