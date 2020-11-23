import _ from "lodash";
import moment from "moment";

export default function orderByAttendances(items) {
  const future = items.filter(item => new Date(item.start_time) >= moment().startOf("day") && new Date(item.start_time) <= moment().endOf("month"));
  return _(future).orderBy(["attendances", "start_time"], ["desc", "asc"]).take(5).value();
}