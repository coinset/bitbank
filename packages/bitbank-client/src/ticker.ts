import { BASE_URL } from './constants'
import join from 'url-join'
import fetch from 'node-fetch'
import { Pairs } from './constants'

type GetResponse = {
  sell: number
  buy: number
  last: number
  high: number
  low: number
  vol: number
  timestamp: number
}

export const getTicker = async (pair: Pairs): Promise<GetResponse> => {
  const url = join(BASE_URL, pair, 'ticker')
  const response = await fetch(url)
  const json = (await response.json()) as GetResponse

  return json
}
