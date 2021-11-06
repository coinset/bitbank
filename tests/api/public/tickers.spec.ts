// eslint-disable-next-line import/no-unresolved
import { expectTicker } from '@test/api/public/ticker.spec'

import { fetchTickers } from '@/api/public/tickers'
import { ALL_TICKER_PAIRS } from '@/constants/pair'

describe('fetchTickers', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTickers()

    expect(result.success).toBeBoolean()

    if (!result.success) return

    result.data.forEach((ticker) => {
      expectTicker(ticker)
      expect(ALL_TICKER_PAIRS).toContain(ticker.pair)
    })
  })
})
