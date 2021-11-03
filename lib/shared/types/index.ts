import type { RequestInit } from 'node-fetch'

type PublicAPI<O, R> = (options: O, init?: RequestInit) => Promise<R>
type PublicSimpleAPI<O, R> = (options?: O, init?: RequestInit) => Promise<R>

type Response<Data> =
  | { success: true; data: Data }
  | {
      success: false
      data: {
        code: number
      }
    }

type OrderType = 'sell' | 'buy'
type Order = 'asc' | 'desc'

type Ask = 'ask'
type Bid = 'bid'

type AskBid = Ask | Bid

type Reviver = Parameters<typeof JSON.parse>[1]

export type {
  PublicAPI,
  PublicSimpleAPI,
  OrderType,
  Order,
  Reviver,
  AskBid,
  Response
}
