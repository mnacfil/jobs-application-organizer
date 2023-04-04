import { differenceInCalendarDays } from 'date-fns';

export const isSameDay = (leftDate, rightDate) => {
    return differenceInCalendarDays(leftDate, rightDate);
}