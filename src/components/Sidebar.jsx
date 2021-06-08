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
        <h3 className="text-center">Payroll App</h3>
      </div>

      <ul className="list-unstyled components">
        
        <li className="active">
          <a
            href="#homePeopleMenu"
            data-toggle="collapse"
            aria-expanded="true"
            className="dropdown-toggle"
          >
            Administration
          </a>
          <ul className="collapsed list-unstyled" id="homePeopleMenu">
            <li>
              <NavLink exact to="/People">
                People
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Company">
                Companies
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
