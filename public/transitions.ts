import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./fetch.ts";
import { isString, join } from "../deps.ts";
import type { BitbankPair, SuccessResponse } from "./types.ts";

const TRANSITIONS = "transactions";

export type TransitionsOptions = {
  pair: BitbankPair;
  YYYYMMDD?: string;
};

type Transaction = {
  transaction_id: number;
  side: "buy" | "sell";
  price: number;
  amount: number;
  executed_at: number;
};

export type TransitionsResponse = SuccessResponse<{
  transactions: Transaction[];
}>;

const reviver: Reviver = (key, value) => {
  if (["price", "amount"].includes(key) && isString(value)) {
    return Number(value);
  }

  return value;
};

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#transactions
 * @beta
 */
export function fetchTransitions(
  { pair, YYYYMMDD = "" }: TransitionsOptions,
  init?: RequestInit,
): Promise<TransitionsResponse> {
  const url = new URL(join(pair, TRANSITIONS, YYYYMMDD), BASE_URL);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
