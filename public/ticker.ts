import { BASE_URL } from "./constants.ts";
import type { BitbankPair, SuccessResponse } from "./types.ts";
import { jsonFetch, Reviver } from "./fetch.ts";
import { isString, join } from "../deps.ts";

const TICKER = "ticker";

export type TickerOptions = {
  pair: BitbankPair;
};

type TickerData = {
  sell: number;
  buy: number;
  high: number;
  low: number;
  open: number;
  last: number;
  vol: number;
  timestamp: number;
};

export type TickerResponse = SuccessResponse<TickerData>;

const dataFields = [
  "sell",
  "buy",
  "open",
  "high",
  "low",
  "last",
  "vol",
  "timestamp",
];

const reviver: Reviver = (key, value) => {
  if (dataFields.includes(key) && isString(value)) {
    return Number(value);
  }
  return value;
};

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#ticker
 * @beta
 */
export function fetchTicker(
  { pair }: TickerOptions,
  init?: RequestInit,
): Promise<TickerResponse> {
  const url = new URL(join(pair, TICKER), BASE_URL);
  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}

export { reviver };
export type { TickerData };
