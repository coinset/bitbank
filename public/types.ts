import type {
  bat,
  bcc,
  btc,
  eth,
  jpy,
  link,
  ltc,
  mona,
  omg,
  Pair,
  qtum,
  xlm,
  xrp,
  xym,
} from "../deps.ts";
export type SuccessResponse<T> = {
  data: T;
  success: number;
};

type BitbankSymbol =
  | btc
  | xrp
  | ltc
  | eth
  | mona
  | bcc
  | xlm
  | qtum
  | bat
  | omg
  | xym
  | link;

export type BitBankJPYPair = Pair<BitbankSymbol, jpy>;
export type BitbankPair = Pair<BitbankSymbol, btc | jpy>;
