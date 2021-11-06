import { BASE_URL, DEPTH } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { BitbankPair } from '@/shared/types/currency'
import type { PublicAPI, Response } from '@/shared/types/fetch'

import { join } from 'path'

const reviver = defineReviver((key, value) => {
  if (['asks', 'bids'].includes(key) && Array.isArray(value)) {
    return value.map((_value) => {
      if (Array.isArray(_value)) {
        return _value.map((__value) =>
          typeof __value === 'string' ? parseFloat(__value) : __value
        )
      }
      return _value
    })
  }
  return value
})

type DepthOptions = {
  pair: BitbankPair
}

type Price = number
type Amount = number

type DepthResponse = Response<{
  asks: [Price, Amount][]
  bids: [Price, Amount][]
  timestamp: number
  sequenceId: string
}>

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#depth
 * @beta
 */
const fetchDepth: PublicAPI<DepthOptions, DepthResponse> = ({ pair }, init) => {
  const url = new URL(join(pair, DEPTH), BASE_URL)
  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchDepth }
export type { DepthOptions, DepthResponse }
