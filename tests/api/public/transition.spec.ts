import { fetchTransitions } from '@/api/public/transitions'

describe('fetchTransitions', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTransitions({ pair: 'btc_jpy' })

    expect(result.success).toBeBoolean()

    if (!result.success) return

    expect(result.data.transactions).toBeArray()

    result.data.transactions.forEach(
      ({ transaction_id, side, price, amount, executed_at }) => {
        expect(transaction_id).toBeNumber()
        expect(side).toBeOneOf(['buy', 'sell'])
        expect(price).toBeNumber()
        expect(amount).toBeNumber()
        expect(executed_at).toBeNumber()
      }
    )
  })
})
