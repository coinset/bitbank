import { fetchTransitions } from "./transitions.ts";
import { anyArray, anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import { ALL_BITBANK_PAIRS } from "./constants.ts";
import type { BitbankPair } from "./types.ts";

test("fetchTransitions", async () => {
  const testCase = async (pair: BitbankPair) => {
    await expect(fetchTransitions({ pair })).resolves.toEqual({
      success: 1,
      data: {
        transactions: anyArray({
          transaction_id: anyNumber(),
          side: anyOf(["sell", "buy"]),
          price: anyNumber(),
          amount: anyNumber(),
          executed_at: anyNumber(),
        }),
      },
    });
  };

  await Promise.all(ALL_BITBANK_PAIRS.map(testCase));
});
