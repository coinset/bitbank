import { Reviver } from '@/shared/types'

const defineReviver = (reviver?: Reviver) => (key: string, value: unknown) => {
  if (key === 'success' && typeof value === 'number') {
    return Boolean(value)
  }

  return reviver ? reviver(key, value) : value
}

export { defineReviver }
