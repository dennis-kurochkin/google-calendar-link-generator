import { format, set } from 'date-fns'
import { INPUT_DATE_FORMAT } from '../constants'

export const todayFormattedDate = format(set(new Date(), { hours: 12, minutes: 0 }), INPUT_DATE_FORMAT)
