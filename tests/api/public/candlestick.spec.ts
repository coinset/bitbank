import { fetchCandlestick } from '@/api/public/candlestick'

describe('fetchCandlestick', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchCandlestick({
      pair: 'btc_jpy',
      candleType: '1min',
      YYYY: '20210101'
    })

    expect(result.success).toBeBoolean()

    if (!result.success) return

    const { candlestick, timestamp } = result.data
    expect(candlestick).toBeArray()
    expect(timestamp).toBeNumber()

    candlestick.forEach((value) => {
      expect(value).toContainKeys(['ohlcv', 'type'])
      const { type, ohlcv } = value
      expect(type).toBeOneOf([
        '1min',
        '5min',
        '15min',
        '30min',
        '1hour',
        '4hour',
        '8hour',
        '12hour',
        '1day',
        '1week',
        '1month'
      ])

      expect(ohlcv).toBeArray()

      ohlcv.forEach((v) => {
        expect(v).toHaveLength(6)
        const [open, high, low, close, volume, date] = v
        expect(open).toBeNumber()
        expect(high).toBeNumber()
        expect(low).toBeNumber()
        expect(close).toBeNumber()
        expect(volume).toBeNumber()
        expect(date).toBeValidDate()
      })
    })
  })
})
