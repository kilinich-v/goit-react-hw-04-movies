import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes';

const AppBar = () => {
    return (
      <ul>
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.moviesFind}>Movies</NavLink>
        </li>
      </ul>
    );
}

export default AppBar
