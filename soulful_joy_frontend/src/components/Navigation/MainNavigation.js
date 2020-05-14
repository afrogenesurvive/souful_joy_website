import React from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

import AuthContext from '../../context/auth-context';
import './MainNavigation.css';


const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main-navigation">
          <div className="main-navigation__logo">
            <h1>SoulfulJoy</h1>

          </div>
          <nav className="main-navigation__items">

            <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
