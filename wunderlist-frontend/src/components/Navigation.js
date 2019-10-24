import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';



const Navigation = () => {

  const currentUser = useSelector(state => state.loginReducer.currentUser)

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
          {currentUser && <NavLink to='/' className='NavBtn'>Logout</NavLink>}
        </Col>
        {/* <NavLink to="/login" className="NavBtn">  Logout  </NavLink> */}
      </Row>
    </div>
  );
};

export default Navigation;