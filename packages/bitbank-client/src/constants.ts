export const BASE_URL = 'https://public.bitbank.cc'
const BTC = 'btc'
const BCH = 'bch'
const MONA = 'mona'
const ETH = 'eth'
const JPY = 'jpy'
const XEM = 'xem'
const XRP = 'xrp'
const LTC = 'ltc'
const XLM = 'xlm'

export const pairs = [
  'btc_jpy',
  'xrp_jpy',
  'xrp_btc',
  'ltc_jpy',
  'ltc_btc',
  'eth_jpy',
  'eth_btc',
  'mona_jpy',
  'mona_btc',
  'bcc_jpy',
  'bcc_btc',
  'xlm_jpy',
  'xlm_btc'
] as const
export type Pairs = typeof pairs[number]

export const symbols = [BTC, BCH, MONA, ETH, JPY, XEM, XRP, LTC, XLM] as const
export type Symbols = typeof symbols[number]
