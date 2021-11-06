import { fetchTicker, dataFields } from '@/api/public/ticker'
import type { TickerData } from '@/api/public/ticker'

const expectTicker = ({
  sell,
  buy,
  high,
  low,
  open,
  last,
  vol,
  timestamp
}: TickerData) => {
  expect(sell).toBeNumber()
  expect(buy).toBeNumber()
  expect(high).toBeNumber()
  expect(low).toBeNumber()
  expect(open).toBeNumber()
  expect(last).toBeNumber()
  expect(vol).toBeNumber()
  expect(timestamp).toBeNumber()
}

describe('fetchTicker', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTicker({ pair: 'btc_jpy' })

    expect(result.success).toBeBoolean()

    if (!result.success) return

    expect(result.data).toContainAllKeys(dataFields)
    expectTicker(result.data)
  })
})

export { expectTicker }
