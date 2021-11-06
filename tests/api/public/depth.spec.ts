import { fetchDepth } from '@/api/public/depth'

describe('fetchDepth', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchDepth({
      pair: 'btc_jpy'
    })

    expect(result.success).toBeBoolean()

    if (!result.success) return

    const { asks, bids, timestamp, sequenceId } = result.data

    expect(timestamp).toBeNumber()
    expect(sequenceId).toBeString()

    const forEachCase = (value: [number, number][]) => {
      expect(value).toBeArray()
      value.forEach((v) => {
        expect(v).toHaveLength(2)
        const [price, amount] = v
        expect(price).toBeNumber()
        expect(amount).toBeNumber()
      })
    }

    forEachCase(asks)
    forEachCase(bids)
  })
})
