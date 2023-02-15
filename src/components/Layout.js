import React from 'react';
import Header from './Header';
import '../styles/Layout.css';

// tried creating a common layout
const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;