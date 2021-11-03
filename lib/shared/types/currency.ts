import type { StrictExtract } from '@/utils/types'
import type { all_pairs } from 'cryptocurrency-types'

type BitbankPair = StrictExtract<
  all_pairs,
  | 'btc_jpy'
  | 'xrp_jpy'
  | 'xrp_btc'
  | 'ltc_jpy'
  | 'ltc_btc'
  | 'eth_jpy'
  | 'eth_btc'
  | 'mona_jpy'
  | 'mona_btc'
  | 'bcc_jpy'
  | 'bcc_btc'
  | 'xlm_jpy'
  | 'xlm_btc'
  | 'qtum_jpy'
  | 'qtum_btc'
  | 'bat_jpy'
  | 'bat_btc'
  | 'omg_jpy'
  | 'omg_btc'
  | 'xym_jpy'
  | 'xym_btc'
>
export type { BitbankPair }
