import { fetchDepth } from "./depth.ts";
import { anyArray, anyNumber, anyString, expect, test } from "../dev_deps.ts";
import { ALL_BITBANK_PAIRS } from "./constants.ts";
import type { BitbankPair } from "./types.ts";

test("fetchDepth", async () => {
  const testCase = async (pair: BitbankPair) => {
    await expect(fetchDepth({ pair })).resolves.toEqual({
      success: 1,
      data: {
        asks: anyArray([anyNumber(), anyNumber()]),
        bids: anyArray([anyNumber(), anyNumber()]),
        timestamp: anyNumber(),
        sequenceId: anyString(),
      },
    });
  };

  await Promise.all(ALL_BITBANK_PAIRS.map(testCase));
});
