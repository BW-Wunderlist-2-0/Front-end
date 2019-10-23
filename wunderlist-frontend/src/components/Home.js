import React, { useState, useEffect } from 'react';
import { Drawer, Button, Icon, List } from 'antd';

import { connect } from 'react-redux';

//Import ToDo component to map over component list
// import TodoItem from './TodoItem';
// Import SearchTasks component
// import EditTask component
// import AddTask component



const Home = props => {
  const [showMenu, setShowMenu] = useState(false)

  console.log(`Home component props from mapStateToProps`, props)
  const toggleDrawer = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div>
      <h1>Home Component</h1>
      <Button onClick={toggleDrawer}>Show Menu</Button>

      {showMenu
        &&
        <Drawer
          title='Options'
          placement='left'
          closable={true}
          onClose={toggleDrawer}
          visible={showMenu}
        />}
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

        {/* {props.tasks.map(entry =>
            <TodoItem key={entry.id} task={entry} />)}

        </List> */}
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