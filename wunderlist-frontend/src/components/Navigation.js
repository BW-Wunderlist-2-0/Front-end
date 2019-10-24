import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { browserHistory } from '../';

import Search from './Search';


// Line 38:31:  'toggleDrawer' is not defined     no-undef
// Line 39:35:  'toggleDisplay' is not defined    no-undef
// Line 39:52:  'addItemModal' is not defined     no-undef
// Line 39:66:  'setAddItemModal' is not defined  no-undef
// Line 40:14:  'Search' is not defined           react/jsx-no-undef

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.loginReducer.currentUser)


  // AddItem state
  // Drawer state




  const logout = e => {
    console.log(`logout clicked`)
    e.preventDefault();
    delete localStorage.token
    dispatch({ type: `LOGOUT` })
    browserHistory.push('/')
  }

  return (
    <div >
      <Row type='flex' justify='space-around' style={{ width: '50vw' }}>
        <Col span={12} offset={8}>
          {!currentUser && <NavLink to="/signup" className="NavBtn">  Signup  </NavLink>}

        </Col>
        <Col>
          {!currentUser && <NavLink to="/login" className="NavBtn">  Login  </NavLink>}
        </Col>
        {/* {currentUser &&
          <Col>
            (<Button onClick={toggleDrawer}>Show Menu</Button>
            <Button onClick={e => toggleDisplay(e, addItemModal, setAddItemModal)}>Add Task</Button>
            <Search />
            <Button type='link' onClick={logout} className='NavBtn'>Logout</Button>)
        </Col>
        } */}
        {/* <NavLink to="/login" className="NavBtn">  Logout  </NavLink> */}
      </Row>
    </div>
  );
};

export default Navigation;