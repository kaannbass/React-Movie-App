// MainLayout.jsx
import React from 'react';
import Navbar from '../components/Navbar';

function MainLayout({ children }) {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="main-layout">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
