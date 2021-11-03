import { fetchTransitions } from '@/api/public/transitions'

describe('fetchCurrencyPairs', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTransitions({ pair: 'btc_jpy' })

    expect(result.success).toEqual(expect.any(Boolean))

    if (!result.success) return

    expect(result.data.transactions).toEqual(expect.any(Array))

    const { transaction_id, side, price, amount, executed_at } =
      result.data.transactions[0]

    expect(transaction_id).toEqual(expect.any(Number))
    expect(side).toEqual(expect.any(String))
    expect(price).toEqual(expect.any(Number))
    expect(amount).toEqual(expect.any(Number))
    expect(executed_at).toEqual(expect.any(Number))
  })
})
