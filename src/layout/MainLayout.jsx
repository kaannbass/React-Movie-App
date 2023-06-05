import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({children}) {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content p-3">
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
