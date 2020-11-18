import React from 'react';
import './layout/layout.css';

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <header className="app-header">
    <h1>{title}</h1>
    <p>
      A remote-first <strong>IT</strong> company
    </p>
  </header>
);

export default Header;
