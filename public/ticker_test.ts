import { fetchTicker } from "./ticker.ts";
import { anyNumber, expect, test } from "../dev_deps.ts";
import { ALL_BITBANK_PAIRS } from "./constants.ts";
import type { BitbankPair } from "./types.ts";

test("fetchTicker", async () => {
  const testCase = async (pair: BitbankPair) => {
    await expect(fetchTicker({ pair })).resolves.toEqual({
      success: 1,
      data: {
        sell: anyNumber(),
        buy: anyNumber(),
        high: anyNumber(),
        low: anyNumber(),
        open: anyNumber(),
        last: anyNumber(),
        vol: anyNumber(),
        timestamp: anyNumber(),
      },
    });
  };

  await Promise.all(ALL_BITBANK_PAIRS.map(testCase));
});
