import type { TickerData } from '@/api/public/ticker'
import { reviver } from '@/api/public/ticker'
import { BASE_URL, TICKERS_JPY } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'

import type { PublicSimpleAPI, Response } from '@/shared/types'
import type { StrictExtract } from '@/utils/types'
import type { all_pairs } from 'cryptocurrency-types'

type TickerJPYPair = StrictExtract<
  all_pairs,
  | 'btc_jpy'
  | 'xrp_jpy'
  | 'ltc_jpy'
  | 'eth_jpy'
  | 'mona_jpy'
  | 'bcc_jpy'
  | 'xlm_jpy'
  | 'qtum_jpy'
  | 'bat_jpy'
  | 'omg_jpy'
  | 'xym_jpy'
>

// eslint-disable-next-line @typescript-eslint/ban-types
type TickerOptions = {}

type TickersJPYResponse = Response<(TickerData & { pair: TickerJPYPair })[]>

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#jpytickers
 * @beta
 */
const fetchTickersJPY: PublicSimpleAPI<TickerOptions, TickersJPYResponse> = (
  _,
  init
) => {
  const url = new URL(TICKERS_JPY, BASE_URL)
  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTickersJPY }
export type { TickersJPYResponse }
