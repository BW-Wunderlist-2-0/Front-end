import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {

  return (
    <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>

      <NavLink to="/signup" className="NavBtn">  Signup  </NavLink>
      <NavLink to="/login" className="NavBtn">  Login  </NavLink>

      {/* <NavLink to="/login" className="NavBtn">  Logout  </NavLink> */}

    </div>
  );
};

export default Header;