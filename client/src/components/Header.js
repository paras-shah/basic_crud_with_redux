import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../api/auth';
import { getTranslation } from '../translate/';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <LanguageContext.Consumer>
          {value => {
            return getTranslation('stream', value);
          }}
        </LanguageContext.Consumer>
      </Link>

      <ThemeContext.Consumer>
        {theme => {
          return (
            <div className={'right menu ' + theme}>
              <Link to="/streams/" className="item">
                All Streams
              </Link>
              <GoogleAuth />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </div>
  );
};

export default Header;
