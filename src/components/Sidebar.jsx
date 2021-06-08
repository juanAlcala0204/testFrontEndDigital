/** Import General Dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
/**
 * Build Global Component Navbar
 */
const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3 className="text-center">Test</h3>
      </div>

      <ul className="list-unstyled components">
        
        <li className="active">
          <a
            href="#homePeopleMenu"
            data-toggle="collapse"
            aria-expanded="true"
            className="dropdown-toggle"
          >
            Módulos
          </a>
          <ul className="collapsed list-unstyled" id="homePeopleMenu">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Users">
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Albums">
                Albumes
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Posts">
                Publicaciones
              </NavLink>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  );
};

/** Export Component Navbar */
export default Sidebar;
