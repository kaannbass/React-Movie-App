import React from 'react';
import Navbar from '../components/Navbar';
// import Home from '../views/Home';
import { Outlet } from 'react-router';


function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content p-3">
       <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MainLayout;
