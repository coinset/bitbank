import { BASE_URL, TRANSITIONS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { defineReviver } from '@/shared/parse'
import type { BitbankPair } from '@/shared/types/currency'

import { join } from 'path'

import type { Response, PublicAPI } from '@/shared/types'

type TransitionsOptions = {
  pair: BitbankPair
  YYYYMMDD?: string
}

type Transaction = {
  transaction_id: number
  side: 'buy' | 'sell'
  price: number
  amount: number
  executed_at: number
}

type TransitionsResponse = Response<{
  transactions: Transaction[]
}>

const reviver = defineReviver((key, value) => {
  if (['price', 'amount'].includes(key) && typeof value === 'string') {
    return parseFloat(value)
  }

  return value
})

/**
 * @throws `Error`
 *
 * @see https://github.com/bitbankinc/bitbank-api-docs/blob/master/public-api.md#transactions
 * @beta
 */
const fetchTransitions: PublicAPI<TransitionsOptions, TransitionsResponse> = (
  { pair, YYYYMMDD = '' },
  init
) => {
  const url = new URL(join(pair, TRANSITIONS, YYYYMMDD), BASE_URL)

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTransitions }
export type { TransitionsOptions, TransitionsResponse }
