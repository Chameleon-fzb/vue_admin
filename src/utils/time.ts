export const getTime = (): string | undefined => {
  const hours = new Date().getHours()
  if (2 <= hours && hours < 4) return '凌晨'
  if (4 <= hours && hours < 7) return '早上'
  if (7 <= hours && hours < 10) return '上午'
  if (10 <= hours && hours < 14) return '中午'
  if (14 <= hours && hours < 20) return '下午'
  if (20 <= hours && hours < 22) return '晚上'
  if (22 <= hours || 2 < hours) return '深夜'
  return '您'
}
