import type { BitbankPair, BitBankJPYPair } from '@/shared/types/currency'

const JPY_BITBANK_PAIRS: BitBankJPYPair[] = [
  'bat_jpy',
  'bcc_jpy',
  'btc_jpy',
  'eth_jpy',
  'ltc_jpy',
  'mona_jpy',
  'omg_jpy',
  'qtum_jpy',
  'xlm_jpy',
  'xrp_jpy',
  'xym_jpy'
]

const ALL_BITBANK_PAIRS: BitbankPair[] = [
  'xrp_btc',
  'ltc_btc',
  'eth_btc',
  'mona_btc',
  'bcc_btc',
  'xlm_btc',
  'qtum_btc',
  'bat_btc',
  'omg_btc',
  'xym_btc',
  ...JPY_BITBANK_PAIRS
]

export { ALL_BITBANK_PAIRS, JPY_BITBANK_PAIRS }
