import { BASE_URL, TICKER } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { BitbankPair } from '@/shared/types/currency'
import type { PublicAPI, Response } from '@/shared/types/fetch'

import { join } from 'path'

type TickerOptions = {
  pair: BitbankPair
}

type TickerData = {
  sell: number
  buy: number
  high: number
  low: number
  open: number
  last: number
  vol: number
  timestamp: number
}

type TickerResponse = Response<TickerData>

const dataFields = [
  'sell',
  'buy',
  'open',
  'high',
  'low',
  'last',
  'vol',
  'timestamp'
]

const reviver = defineReviver((key, value) => {
  if (dataFields.includes(key) && typeof key === 'string') {
    return parseFloat(value)
  }
  return value
})

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#ticker
 * @beta
 */
const fetchTicker: PublicAPI<TickerOptions, TickerResponse> = (
  { pair },
  init
) => {
  const url = new URL(join(pair, TICKER), BASE_URL)
  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTicker, reviver, dataFields }
export type { TickerOptions, TickerResponse, TickerData }
