import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./fetch.ts";
import type { BitbankPair, SuccessResponse } from "./types.ts";
import { isString } from "../deps.ts";

import { join } from "../deps.ts";

const DEPTH = "depth";

const reviver: Reviver = (key, value) => {
  if (["asks", "bids"].includes(key) && Array.isArray(value)) {
    return value.map((_value) => {
      if (Array.isArray(_value)) {
        return _value.map((__value) =>
          isString(__value) ? parseFloat(__value) : __value
        );
      }
      return _value;
    });
  }
  return value;
};

export type DepthOptions = {
  pair: BitbankPair;
};

type Price = number;
type Amount = number;

export type DepthResponse = SuccessResponse<{
  asks: [Price, Amount][];
  bids: [Price, Amount][];
  timestamp: number;
  sequenceId: string;
}>;

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#depth
 * @beta
 */
export function fetchDepth(
  { pair }: DepthOptions,
  init?: RequestInit,
): Promise<DepthResponse> {
  const url = new URL(join(pair, DEPTH), BASE_URL);
  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
