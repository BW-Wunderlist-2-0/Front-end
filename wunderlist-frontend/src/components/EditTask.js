import React, { useState } from 'react';
import { Form, Input, Icon, DatePicker, Radio, Button } from 'antd'
import moment from 'moment';
import { connect } from 'react-redux'

import { handleFormChange } from '../utilities/handleFormChange'
import { toggleDisplay } from '../utilities/toggleDisplay';
// const { MonthPicker, RangePicker } = DatePicker;




const EditTask = props => {
  // may need to set w/ useEffect
  const initialState = {
    completed: false,
    item: '',
    dateCreated: '',
    recurring: false,
    recurringFrequency: 'Once'
  }

  const [formInput, setFormInput] = useState(props.task)
  const [addItemModal, setAddItemModal] = useState([props.addItemModal, props.setAddItemModal]);
  // const { addItemModal, setAddItemModal } = props;

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values of EditTask Form: ', formInput);
    setFormInput(initialState)

    toggleDisplay(e, addItemModal, setAddItemModal)
  };

  const handleDateChange = e => {
    console.log(`handleDateChange e`, e, `e formatted with moment`, moment(e).format('MMMM Do YYYY, h:mm:ss a'))
    const formattedDate = moment(e).format('MM-DD-YYYY, h:mm:ss a');
    setFormInput(
      {
        ...formInput,
        dateCreated: formattedDate
      }
    )
  }

  const handleRadioChange = e => {
    setFormInput({
      ...formInput,
      recurringFrequency: e.target.value
    })
  }



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Item label='Task Name'>
          <Input
            type='text'
            name='item'
            value={formInput.item}
            onChange={e => handleFormChange(e, formInput, setFormInput)}
          />
        </Form.Item>
        <Form.Item label='Due Date'>
          <DatePicker name='dateCreated' showTime format='YYYY-MM-DD HH:mm:ss' onChange={handleDateChange} />
        </Form.Item>

        <Form.Item>
          <Radio.Group value={formInput.recurringFrequency} onChange={handleRadioChange}>
            <Radio value='Once'>Once</Radio>
            <Radio value='Daily'>Daily</Radio>
            <Radio value='Weekly'>Weekly</Radio>
            <Radio value='Monthly'>Monthly</Radio>
          </Radio.Group >
        </Form.Item>

        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>

    </>
  )
}

const mapStateToProps = state => {
  console.log(`EditTask mSTP state`, state)
  return {
    edit: state.editReducer,
    task: state.editReducer.task
  }
}

export default connect(mapStateToProps, {})(EditTask);