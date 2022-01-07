import type { BitBankJPYPair, BitbankPair } from "./types.ts";
export const BASE_URL = "https://public.bitbank.cc";

export const JPY_BITBANK_PAIRS: BitBankJPYPair[] = Array.from(
  new Set([
    "bat_jpy",
    "bcc_jpy",
    "btc_jpy",
    "eth_jpy",
    "ltc_jpy",
    "mona_jpy",
    "omg_jpy",
    "qtum_jpy",
    "xlm_jpy",
    "xrp_jpy",
    "xym_jpy",
    "link_jpy",
  ]),
);

export const ALL_BITBANK_PAIRS: BitbankPair[] = Array.from(
  new Set([
    "xrp_btc",
    "ltc_btc",
    "eth_btc",
    "mona_btc",
    "bcc_btc",
    "xlm_btc",
    "qtum_btc",
    "bat_btc",
    "omg_btc",
    "xym_btc",
    "link_btc",
    ...JPY_BITBANK_PAIRS,
  ]),
);
