import type { TickerData } from '@/api/public/ticker'
import { reviver } from '@/api/public/ticker'
import { BASE_URL, TICKERS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitbankPair } from '@/shared/types/currency'

import type { Response, PublicSimpleAPI } from '@/shared/types'

// eslint-disable-next-line @typescript-eslint/ban-types
type TickerOptions = {}

type TickersResponse = Response<(TickerData & { pair: BitbankPair })[]>

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#tickers
 * @beta
 */
const fetchTickers: PublicSimpleAPI<TickerOptions, TickersResponse> = (
  _,
  init
) => {
  const url = new URL(TICKERS, BASE_URL)
  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTickers }
export type { TickersResponse }
