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
        <Link to='/stats'>
          <li>Stats</li>
        </Link>
        <Link to='/upload'>
          <li>Upload</li>
        </Link>
        <Link to='/allhamsters'>
          <li>All hamsters</li>
        </Link>
      </ul>
    </nav>

  );
}

export default Navigation;