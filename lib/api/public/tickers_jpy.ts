import type { TickerData } from '@/api/public/ticker'
import { reviver } from '@/api/public/ticker'
import { BASE_URL, TICKERS_JPY } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitBankJPYPair } from '@/shared/types/currency'
import type { PublicSimpleAPI, Response } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type TickersJPYOptions = {}

type TickersJPYResponse = Response<(TickerData & { pair: BitBankJPYPair })[]>

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#jpytickers
 * @beta
 */
const fetchTickersJPY: PublicSimpleAPI<TickersJPYOptions, TickersJPYResponse> =
  (_, init) => {
    const url = new URL(TICKERS_JPY, BASE_URL)
    return jsonFetch(url, init, {
      parseJson: reviver
    })
  }

export { fetchTickersJPY }
export type { TickersJPYResponse }
