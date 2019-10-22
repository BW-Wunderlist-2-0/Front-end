import React from 'react';
import moment from 'moment';
const TodoItem = props => {
    console.log('TodoItem Component', props)
    const formattedDate = moment(props.task.dateCreated).format('MMMM Do YYYY, h:mm:ss a')
    return (
        <div>
        <h3>{props.task.item}</h3>
        <p>{formattedDate}</p>
        </div>

    )
}

export default TodoItem