import { fetchTickersJPY } from "./tickers_jpy.ts";
import { anyArray, anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import { JPY_BITBANK_PAIRS } from "./constants.ts";

test("fetchTickersJPY", async () => {
  await expect(fetchTickersJPY()).resolves.toEqual({
    success: 1,
    data: anyArray({
      pair: anyOf(JPY_BITBANK_PAIRS),
      sell: anyNumber(),
      buy: anyNumber(),
      high: anyNumber(),
      low: anyNumber(),
      open: anyNumber(),
      last: anyNumber(),
      vol: anyNumber(),
      timestamp: anyNumber(),
    }),
  });
});
