const isLocal = process.env.NEXT_PUBLIC_VERCEL_ENV === 'local'

export const priceIds = {
  lifetime: isLocal ? 'price_1N8isQCMVxcjybDEegEf3LMk' : 'price_1N97n6CMVxcjybDEXBAWvqgj',
  yearlyUpdates: '',
}
