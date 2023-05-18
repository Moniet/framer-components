const isLocal = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'

export const priceIds = {
  lifetime: isLocal ? 'price_1N8isQCMVxcjybDEegEf3LMk' : '',
  yearlyUpdates: '',
}
