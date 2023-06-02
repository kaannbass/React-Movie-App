import React from 'react';
import { Outlet } from 'react-router';

function Auth({ children }) {
  return (
    <div className="login-layout">
       <Outlet></Outlet>
    </div>
  );
}
export default Auth;
