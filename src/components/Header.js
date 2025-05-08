import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/emblem">Герб</Link></li>
        <li><Link to="/history">История</Link></li>
        <li><Link to="/current">Современность</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
