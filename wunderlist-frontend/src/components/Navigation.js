import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { browserHistory } from '../';

import Search from './Search';




const Navigation = () => {
  const dispatch = useDispatch();
  const userID = useSelector(state => state.loginReducer.userID)
  const uiFilters = useSelector(state => state.uiReducer)




  const toggleDisplay = (e, message) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: `${message}` })
  }

  const logout = e => {

    e.preventDefault();
    delete localStorage.token
    dispatch({ type: `LOGOUT` })
    browserHistory.push('/')
  }

  return (
    <div >
      {!userID &&
        <Row type='flex' justify='space-around' style={{ width: '80vw' }}>
          <Col span={12} offset={8}>
            <NavLink to="/signup" className="NavBtn">  Signup  </NavLink>
          </Col>
          <Col>
            <NavLink to="/login" className="NavBtn">  Login  </NavLink>
          </Col>
        </Row>
      }
      {userID &&
        <Row style={{ width: '80vw' }}>

          <Col >
            <Button onClick={e => toggleDisplay(e, `TOGGLE_MENU`)}>Show Menu</Button>
            <Button onClick={e => toggleDisplay(e, `TOGGLE_ADD_ITEM`)}>Add Task</Button>
            <Search />
            <Button type='link' onClick={logout} className='NavBtn'>Logout</Button>
          </Col>
        </Row>
      }


    </div >
  );
};

export default Navigation;