import { any, anyArray, anyNumber, expect, test } from "../dev_deps.ts";
import { fetchCandlestick } from "./candlestick.ts";
import { ALL_BITBANK_PAIRS } from "./constants.ts";
import type { BitbankPair } from "./types.ts";

test("fetchCandlestick", async () => {
  const testCase = async (pair: BitbankPair) => {
    await expect(
      fetchCandlestick({
        pair,
        "candleType": "8hour",
        "YYYY": "2021",
      }),
    ).resolves.toEqual({
      success: 1,
      data: {
        candlestick: [{
          type: "8hour",
          ohlcv: anyArray([
            anyNumber(),
            anyNumber(),
            anyNumber(),
            anyNumber(),
            anyNumber(),
            any(Date),
          ]),
        }],
        timestamp: anyNumber(),
      },
    });
  };

  await Promise.all(ALL_BITBANK_PAIRS.map(testCase));
});
