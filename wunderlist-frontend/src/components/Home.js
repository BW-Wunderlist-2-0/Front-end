import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';

import { connect } from 'react-redux';
import TodoItem from './TodoItem';
//Import ToDo component to map over component list
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
      {props.tasks.map(entry => 
        <TodoItem key={entry.id} task={entry}/>
      )}
      {showMenu
        &&
        <Drawer
          title='Options'
          placement='left'
          closable={true}
          onClose={toggleDrawer}
          visible={showMenu}
        />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {})(Home);