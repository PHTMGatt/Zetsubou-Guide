import React from 'react';
import Nav from './Nav';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="zets-header">
      <div className="zets-header-content">
        <h1 className="zets-header-title">Seeds of Doubt</h1>
        <p className="zets-header-subtitle">Zetsubou No Shima Easter Egg Guide</p>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
