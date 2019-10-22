import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

//Import ToDo component to map over component list
// Import SearchTasks component
// import EditTask component
// import AddTask component



const Home = () => {
  const [showMenu, setShowMenu] = useState(false)

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
    </div>
  )
}

export default Home;