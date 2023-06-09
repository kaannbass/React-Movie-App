import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="main-layout bg-slate-100">
      <Navbar />
      <div className="content p-1 min-h-[100vh] bg-slate-100">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
