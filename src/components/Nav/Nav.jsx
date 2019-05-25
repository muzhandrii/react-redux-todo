import React from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';
import { routes } from '../../scenes/router';

export default function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            exact
            to={routes.index}
            className="nav-list__link"
            activeClassName="nav-list__link_active"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.new}
            className="nav-list__link"
            activeClassName="nav-list__link_active"
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.completed}
            className="nav-list__link"
            activeClassName="nav-list__link_active"
          >
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
