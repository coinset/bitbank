import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./fetch.ts";
import type { BitbankPair, SuccessResponse } from "./types.ts";

import { isNumber, isString, join } from "../deps.ts";

const CANDLESTICK = "candlestick";

type Min = "min";
type Hour = "hour";
type Day = "day";
type Week = "week";
type Month = "month";

type Unit<T extends string | number, U extends string> = `${T}${U}`;

export type CandleType =
  | Unit<1 | 5 | 15 | 30, Min>
  | Unit<1 | 4 | 8 | 12, Hour>
  | Unit<1, Day>
  | Unit<1, Week>
  | Unit<1, Month>;

export type CandlestickOptions = {
  pair: BitbankPair;
  candleType: CandleType;
  YYYY: string;
};

type Open = number;
type High = number;
type Low = number;
type Close = number;
type Volume = number;
type Ohlcv = [Open, High, Low, Close, Volume, Date];

export type CandlestickResponse = SuccessResponse<{
  candlestick: {
    type: CandleType;
    ohlcv: Ohlcv[];
  }[];
  timestamp: number;
}>;

const reviver: Reviver = (key, value) => {
  if (key === "ohlcv" && Array.isArray(value)) {
    return value.map(([open, high, low, close, volume, date]: Ohlcv) => {
      const numbered = [open, high, low, close, volume].map((v) =>
        isString(v) ? Number(v) : v
      );
      return [...numbered, isNumber(date) ? new Date(date) : date];
    });
  }

  return value;
};

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#candlestick
 * @beta
 */
export function fetchCandlestick(
  { pair, candleType, YYYY }: CandlestickOptions,
  init?: RequestInit,
): Promise<CandlestickResponse> {
  const url = new URL(join(pair, CANDLESTICK, candleType, YYYY), BASE_URL);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
