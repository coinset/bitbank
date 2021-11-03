import { fetchDepth } from '@/api/public/depth'

describe('fetchCurrencyPairs', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchDepth({
      pair: 'btc_jpy'
    })

    expect(result.success).toEqual(expect.any(Boolean))

    if (!result.success) return

    const { asks, bids, timestamp, sequenceId } = result.data

    expect(timestamp).toEqual(expect.any(Number))
    expect(sequenceId).toEqual(expect.any(String))
    expect(asks).toEqual(expect.any(Array))
    expect(asks[0]).toEqual(expect.any(Array))
    expect(asks[0]).toHaveLength(2)
    expect(asks[0][0]).toEqual(expect.any(Number))
    expect(asks[0][1]).toEqual(expect.any(Number))

    expect(bids).toEqual(expect.any(Array))
  })
})
