import moment from "moment";

export const areDatesEqual = (dateInput1, dateInput2) => {
  const date1 = moment(dateInput1);
  const date2 = moment(dateInput2);

  // Check if both dates are valid
  if (!date1.isValid() || !date2.isValid()) return false;

  // Compare year, month, and day
  return date1.year() === date2.year() && date1.month() === date2.month() && date1.date() === date2.date();
};
