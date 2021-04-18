import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AppBar = () => {
  return (
    <ul className="nav-list">
      <li className="nav-list__item">
        <NavLink
          exact
          to={routes.home}
          className="nav-list__link"
          activeClassName="nav-list__link--active"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink
          exact
          to={routes.moviesFind}
          className="nav-list__link"
          activeClassName="nav-list__link--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default AppBar;
