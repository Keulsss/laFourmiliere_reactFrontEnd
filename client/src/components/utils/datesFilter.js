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
              .startOf("day")
              .add(1, "days") &&
          new Date(item.start_time) <=
            moment()
              .endOf("day")
              .add(1, "days")
      );
    case 4:
      return items.filter(
        item =>
          new Date(item.start_time) >=
            moment().startOf(
              moment()
                .endOf("week")
                .subtract(1, "days")
            ) && new Date(item.start_time) <= moment().endOf("week")
      );
    case 5:
      return items.filter(
        item =>
          new Date(item.start_time) >= moment().startOf("date") &&
          new Date(item.start_time) <= moment().endOf("week")
      );
    case 6:
      var startDate = moment()
        .endOf("week")
        .add(1, "days");
      var endDate = moment()
        .endOf("week")
        .add(7, "days");
      return items.filter(
        item =>
          new Date(item.start_time) >= moment().startOf(startDate) &&
          new Date(item.start_time) <= moment().endOf(endDate)
      );
    case 7:
      return items.filter(
        item =>
          new Date(item.start_time) >= moment().startOf("date") &&
          new Date(item.start_time) <=
            moment().endOf(
              moment()
                .endOf("week")
                .add(7, "days")
            )
      );
    case 8:
      return items.filter(
        item =>
          new Date(item.start_time) >=
            moment().startOf(
              moment()
                .endOf("month")
                .add(1, "days")
            ) &&
          new Date(item.start_time) <=
            moment()
              .endOf("month")
              .add(1, "days")
              .endOf("month")
      );
    default:
      return items.filter(
        item => new Date(item.start_time) >= moment().startOf("date")
      );
  }
}
