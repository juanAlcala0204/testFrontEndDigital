/** Import General Dependencies */
import React from 'react';

/** Import Components */
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

/** Import File Css of the Component Home */
import "../assets/css/home.css";

/**
 * Build Global Component Navbar
 */
const Main = ({children}) => {

    return (
        <div className="wrapper">

        <Sidebar />
          <div id="content">
          <Navbar />
          {children}
          </div>
    </div>
    );

}

/** Export Component Navbar */
export default Main;