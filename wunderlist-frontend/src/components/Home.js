import React, { useState, useEffect } from 'react';
import { Drawer, Button, Icon, List, Modal } from 'antd';

import { connect } from 'react-redux';

import AddTask from './AddTask';
//Import ToDo component to map over component list
// import TodoItem from './TodoItem';
// Import SearchTasks component
// import EditTask component
// import AddTask component



const Home = props => {
  const [showMenu, setShowMenu] = useState(false)
  const [addItemModal, setAddItemModal] = useState(false)

  console.log(`Home component props from mapStateToProps`, props)

  const toggleDrawer = () => {
    setShowMenu(!showMenu)
  }

  const toggleDisplay = (e, display, displaySetter) => {
    e.preventDefault();
    displaySetter(!display)
  }

  return (
    <div>
      <h1>Home Component</h1>

      <Button onClick={toggleDrawer}>Show Menu</Button>
      <Button onClick={e => toggleDisplay(e, addItemModal, setAddItemModal)}>Add Task</Button>
      {showMenu
        &&
        <Drawer
          title='Options'
          placement='left'
          closable={true}
          onClose={toggleDrawer}
          visible={showMenu}
        />}
      <Modal
        title='Add Task'
        visible={addItemModal}
        footer={false}
        onCancel={e => toggleDisplay(e, addItemModal, setAddItemModal)}

      >
        <AddTask />
      </Modal>
      <div>
        <List
          itemLayout='horizontal'
          dataSource={props.tasks}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.item}
              />
              <Icon type="close" />
            </List.Item>
          )}
        />


      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(`Home.js mSTP state`, state, `tasks`, state.todoReducer.tasks)
  return {
    dataFetching: state.todoReducer.dataFetching,
    tasks: state.todoReducer.tasks
  }
}

export default connect(mapStateToProps, {})(Home);