import { fetchTickers } from '@/api/public/tickers'

describe('fetchCurrencyPairs', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTickers()

    expect(result.success).toEqual(expect.any(Boolean))

    if (!result.success) return

    const { sell, buy, high, low, open, last, vol, timestamp, pair } =
      result.data[0]

    expect(sell).toEqual(expect.any(Number))
    expect(buy).toEqual(expect.any(Number))
    expect(high).toEqual(expect.any(Number))
    expect(low).toEqual(expect.any(Number))
    expect(open).toEqual(expect.any(Number))
    expect(last).toEqual(expect.any(Number))
    expect(vol).toEqual(expect.any(Number))
    expect(timestamp).toEqual(expect.any(Number))
    expect(pair).toEqual(expect.any(String))
  })
})
