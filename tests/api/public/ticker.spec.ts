import { fetchTicker, dataFields } from '@/api/public/ticker'

describe('fetchCurrencyPairs', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTicker({ pair: 'btc_jpy' })

    expect(result.success).toEqual(expect.any(Boolean))

    if (!result.success) return

    const keys = Object.keys(result.data)

    dataFields.forEach((field) => {
      expect(keys).toContain(field)
    })
    expect(keys).toHaveLength(dataFields.length)

    const { sell, buy, high, low, open, last, vol, timestamp } = result.data

    expect(sell).toEqual(expect.any(Number))
    expect(buy).toEqual(expect.any(Number))
    expect(high).toEqual(expect.any(Number))
    expect(low).toEqual(expect.any(Number))
    expect(open).toEqual(expect.any(Number))
    expect(last).toEqual(expect.any(Number))
    expect(vol).toEqual(expect.any(Number))
    expect(timestamp).toEqual(expect.any(Number))
  })
})
