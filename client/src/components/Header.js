import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../api/auth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Stream
      </Link>
      <div className="right menu">
        <Link to="/streams/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
