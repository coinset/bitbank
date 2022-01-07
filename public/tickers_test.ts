import { fetchTickers } from "./tickers.ts";
import { anyArray, anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import { ALL_BITBANK_PAIRS } from "./constants.ts";

test("fetchTickers", async () => {
  await expect(fetchTickers()).resolves.toEqual({
    success: 1,
    data: anyArray({
      pair: anyOf(ALL_BITBANK_PAIRS),
      sell: anyNumber(),
      buy: anyNumber(),
      open: anyNumber(),
      high: anyNumber(),
      low: anyNumber(),
      last: anyNumber(),
      vol: anyNumber(),
      timestamp: anyNumber(),
    }),
  });
});
