import type {
  btc,
  xrp,
  ltc,
  eth,
  mona,
  bcc,
  xlm,
  qtum,
  bat,
  omg,
  xym,
  jpy,
  Pair
} from 'cryptocurrency-types'

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

type BitBankJPYPair = Pair<BitbankSymbol, jpy>
type BitbankPair = Pair<BitbankSymbol, btc | jpy>

export type { BitbankPair, BitbankSymbol, BitBankJPYPair }
