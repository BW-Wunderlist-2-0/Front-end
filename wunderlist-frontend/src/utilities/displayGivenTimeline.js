import moment from 'moment';

export const displayGivenTimeline = (todos, filter) => {


  // console.log(todos.forEach(entry => entry.setDate - moment().format('MM-DD-YYYY, h:mm:ss a')))
  const now = Date.now();
  const day = moment().add(1, 'days').format('DD')
  const week = moment().add(7, 'days').format('MM-DD-YYYY, h:mm:ss a')
  const month = moment().add(30, 'days').format('MM-DD-YYYY, h:mm:ss a')
  switch (filter) {
    case 'SHOW_DAY':
      return todos.filter(entry => entry.setDate - moment().format('MM-DD-YYYY, h:mm:ss a') > 1)
    //moment one day past Date.now
    // return todos.filter(entry => entry.setDate - moment().format('MM-DD-YYYY, h:mm:ss a') > 1)

    case 'SHOW_SEVEN_DAYS':
      return todos.filter(entry => entry.setDate - moment().format('MM-DD-YYYY, h:mm:ss a') > 7
        //moment seven days past Date.now
      )
    case 'SHOW_THIRTY_DAYS':
      return todos.filter(entry => entry.setDate - moment().format('MM-DD-YYYY, h:mm:ss a') > 30
        //moment thirty days past day.now
      )
    default:
      return todos;
  }
}