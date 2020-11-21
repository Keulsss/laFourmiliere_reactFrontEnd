export default function datesFilter(date) {

  if (date == null || date == "" && array == null) {
    start_date = moment().format('DD/MM/YYYY');
    displayCalendar(category, page, start_date);
  }

  if (date == "Aujourd'hui") {
    start_date = moment().format('DD/MM/YYYY');
    end_date = moment().format('DD/MM/YYYY');
    displayCalendar(category, page, start_date, end_date);
  }

  if (date == "Demain") {
    tmp = moment().add(1, 'days');
    start_date = moment().startOf('day').add(1, 'days').format('DD/MM/YYYY');
    end_date = tmp.format('DD/MM/YYYY');
    displayCalendar(category, page, start_date, end_date);
  }

  if (date == "Ce week-end") {
    tmp = moment().endOf('week');
    end_date = moment().endOf('week').format('DD/MM/YYYY');
    start_date = tmp.subtract(1, 'days').format('DD/MM/YYYY');
    displayCalendar(category, page, start_date, end_date);
  }

  if (date == "Cette semaine") {
    start_date = moment().format('DD/MM/YYYY');
    end_date = moment().endOf('week').format('DD/MM/YYYY');
    displayCalendar(category, page, start_date, end_date);
  }

  if (date == "Semaine suivante") {
    tmp = moment().endOf('week').add(1, "days");
    start_date = tmp.format('DD/MM/YYYY');
    end_date = tmp.add(6, "days").format('DD/MM/YYYY');
    displayCalendar(category, page, start_date, end_date);
  }

  if (date == "Ce mois-ci") {
    start_date = moment().format('DD/MM/YYYY');
    end_date = moment().endOf('month').format('DD/MM/YYYY');
    displayCalendar(category, page, start_date, end_date);
  }

  if (date == "Mois prochain") {
    tmp = moment().endOf('month').add(1, "days");
    start_date = tmp.format('DD/MM/YYYY');
    end_date = tmp.endOf('month').format('DD/MM/YYYY');
    displayCalendar(category, page, start_date, end_date);
  }

  if (array != null) {
    start_date = array.slice(0, 10);
    end_date = array.slice(11);
    displayCalendar(category, page, start_date, end_date);
  }
}