import { BASE_URL, CANDLESTICK } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { BitbankPair } from '@/shared/types/currency'
import type { Response, PublicAPI } from '@/shared/types/fetch'

import { join } from 'path'

type Min = 'min'
type Hour = 'hour'
type Day = 'day'
type Week = 'week'
type Month = 'month'

type Unit<T extends string | number, U extends string> = `${T}${U}`

type CandleType =
  | Unit<1 | 5 | 15 | 30, Min>
  | Unit<1 | 4 | 8 | 12, Hour>
  | Unit<1, Day>
  | Unit<1, Week>
  | Unit<1, Month>

type CandlestickOptions = {
  pair: BitbankPair
  candleType: CandleType
  YYYY: string
}

type Open = number
type High = number
type Low = number
type Close = number
type Volume = number
type Ohlcv = [Open, High, Low, Close, Volume, Date]

type CandlestickResponse = Response<{
  candlestick: {
    type: CandleType
    ohlcv: Ohlcv[]
  }[]
  timestamp: number
}>

const reviver = defineReviver((key, value) => {
  if (key === 'ohlcv' && Array.isArray(value)) {
    return value.map(([open, high, low, close, volume, date]: Ohlcv) => {
      const numbered = [open, high, low, close, volume].map((v) =>
        typeof v === 'string' ? Number(v) : v
      )
      return [...numbered, typeof date === 'number' ? new Date(date) : date]
    })
  }

  return value
})

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#candlestick
 * @beta
 */
const fetchCandlestick: PublicAPI<CandlestickOptions, CandlestickResponse> = (
  { pair, candleType, YYYY },
  init
) => {
  const url = new URL(join(pair, CANDLESTICK, candleType, YYYY), BASE_URL)

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchCandlestick }
export type { CandlestickOptions, CandlestickResponse, CandleType }
