import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/battle'>
          <li>Battle</li>
        </Link>
        <li className="hamsterWar">Hamster war</li>
        <Link to='/stats'>
          <li>Stats</li>
        </Link>
        <Link to='/upload'>
          <li>Upload</li>
        </Link>
      </ul>
    </nav>

  );
}

export default Navigation;