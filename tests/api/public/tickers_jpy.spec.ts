// eslint-disable-next-line import/no-unresolved
import { expectTicker } from '@test/api/public/ticker.spec'

import { fetchTickersJPY } from '@/api/public/tickers_jpy'
import { JPY_BITBANK_PAIRS } from '@/constants/pair'

describe('fetchTickersJPY', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTickersJPY()

    expect(result.success).toBeBoolean()

    if (!result.success) return

    result.data.forEach((ticker) => {
      expectTicker(ticker)
      expect(JPY_BITBANK_PAIRS).toContain(ticker.pair)
    })
  })
})

export { expectTicker }
