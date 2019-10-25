import moment from 'moment';

export const displayGivenTimeline = (todos, filter) => {
  switch (filter) {
    case 'SHOW_DAY':
      return todos.filter(entry => entry.setDate >= Date.now && entry.setDate <= moment().add(1, 'days').calendar()
        //moment one day past Date.now
      )
    case 'SHOW_SEVEN_DAYS':
      return todos.filter(entry => entry.setDate >= Date.now && entry.setDate <= moment().add(7, 'days').calendar()
        //moment seven days past Date.now
      )
    case 'SHOW_THIRTY_DAYS':
      return todos.filter(entry => entry.setDate >= Date.now && entry.setDate <= moment().add(30, 'days').calendar()
        //moment thirty days past day.now
      )
    default:
      return todos;
  }
}