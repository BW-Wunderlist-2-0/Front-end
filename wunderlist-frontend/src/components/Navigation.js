import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { browserHistory } from '../';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.loginReducer.currentUser)

  const logout = e => {
    console.log(`logout clicked`)
    e.preventDefault();
    delete localStorage.token
    dispatch({ type: `LOGOUT` })
    browserHistory.push('/')
  }

  return (
    <div >
      <Row type='flex' justify='space-evenly' style={{ width: '50vw' }}>
        <Col span={12} offset={8}>
          {!currentUser && <NavLink to="/signup" className="NavBtn">  Signup  </NavLink>}

        </Col>
        <Col>
          {!currentUser && <NavLink to="/login" className="NavBtn">  Login  </NavLink>}
        </Col>
        <Col>
          {currentUser && <Button type='link' onClick={logout} className='NavBtn'>Logout</Button>}
        </Col>
        {/* <NavLink to="/login" className="NavBtn">  Logout  </NavLink> */}
      </Row>
    </div>
  );
};

export default Navigation;