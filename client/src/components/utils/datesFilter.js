import moment from "moment";

export default function datesFilter(items, selectedDateId) {
  switch (selectedDateId) {
    case 2:
      return items.filter(
        item =>
        new Date(item.start_time) >= moment().startOf("date") &&
        new Date(item.start_time) <= moment().endOf("date")
      );
    case 3:
      return items.filter(
        item =>
        new Date(item.start_time) >=
        moment()
        .add(1, "days")
        .startOf("day") &&
        new Date(item.start_time) <=
        moment()
        .add(1, "days")
        .endOf("day")
      );
    case 4:
      return items.filter(
        item =>
        new Date(item.start_time) >=
        moment()
        .endOf("week")
        .subtract(1, "days")
        .startOf("day") &&
        new Date(item.start_time) <= moment().endOf("week")
      );
    case 5:
      return items.filter(
        item =>
        new Date(item.start_time) >= moment().startOf("day") &&
        new Date(item.start_time) <= moment().endOf("week")
      );
    case 6:
      return items.filter(
        item =>
        new Date(item.start_time) >=
        moment()
        .add(1, "weeks").startOf("week") &&
        new Date(item.start_time) <=
        moment()
        .add(1, "weeks").endOf("week")
      );
    case 7:
      return items.filter(
        item =>
        new Date(item.start_time) >= moment().startOf("day") &&
        new Date(item.start_time) <=
        moment().endOf("month")
      );
    case 8:
      return items.filter(
        item =>
        new Date(item.start_time) >=
        moment()
        .add(1, "months").startOf("month") &&
        new Date(item.start_time) <=
        moment()
        .add(1, "months")
        .endOf("month")
      );
    default:
      return items.filter(
        item => new Date(item.start_time) >= moment().startOf("date")
      );
  }
}