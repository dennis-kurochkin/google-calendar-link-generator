import { format, utcToZonedTime } from 'date-fns-tz'

export const formatDate = (date: Date): string => {
  const zonedDate = utcToZonedTime(date, date.getTimezoneOffset().toString())
  return `${format(zonedDate, 'yyyyMMdd')}T${format(zonedDate, 'HHmmss')}Z`
}
