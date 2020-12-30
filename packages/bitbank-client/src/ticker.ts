import { BASE_URL } from './constants'
import join from 'url-join'
import fetch from 'node-fetch'
import { Pairs } from './constants'

type GetResponse = {
  data: {
    sell: number
    buy: number
    last: number
    high: number
    low: number
    vol: number
    timestamp: number
  }
  success: number
}

const dataKeys = ['sell', 'buy', 'last', 'high', 'low', 'vol', 'timestamp']

export const getTicker = async (pair: Pairs): Promise<GetResponse> => {
  const url = join(BASE_URL, pair, 'ticker')
  const response = await fetch(url)

  const json: GetResponse = JSON.parse(await response.text(), (key, value) => {
    if (dataKeys.includes(key) && typeof value === 'string') {
      return Number(value)
    }
    return value
  })

  return json
}
