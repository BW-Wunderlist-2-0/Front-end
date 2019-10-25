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
  const uiFilters = useSelector(state => state.uiReducer)


  // AddItem state
  // Drawer state


  const toggleDisplay = (e, message) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: `${message}` })
  }

  const logout = e => {
    console.log(`logout clicked`)
    e.preventDefault();
    delete localStorage.token
    dispatch({ type: `LOGOUT` })
    browserHistory.push('/')
  }

  return (
    <div >
      {!currentUser &&
        <Row type='flex' justify='space-around' style={{ width: '80vw' }}>
          <Col span={12} offset={8}>
            <NavLink to="/signup" className="NavBtn">  Signup  </NavLink>
          </Col>
          <Col>
            <NavLink to="/login" className="NavBtn">  Login  </NavLink>
          </Col>
        </Row>
      }
      {currentUser &&
        <Row style={{ width: '80vw' }}>

          <Col >
            <Button onClick={e => toggleDisplay(e, `TOGGLE_MENU`)}>Show Menu</Button>
            <Button onClick={e => toggleDisplay(e, `TOGGLE_ADD_ITEM`)}>Add Task</Button>
            <Search />
            <Button type='link' onClick={logout} className='NavBtn'>Logout</Button>
          </Col>
        </Row>
      }
      {/* <NavLink to="/login" className="NavBtn">  Logout  </NavLink> */}

    </div >
  );
};

export default Navigation;