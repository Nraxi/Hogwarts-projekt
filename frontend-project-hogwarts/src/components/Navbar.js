import { Link } from "react-router-dom";
import "../views/css/navbar.css";
import React from "react";

const Navbar = () => {
    return (
      <header>
        <nav className="nav">
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/education">Education</Link>
          <Link className="nav-item" to="/courses">Courses</Link>
          <Link className="nav-item" to="/Apply">Apply</Link>
          <Link className="nav-item" to="/staff">Staff</Link>
          <Link className="nav-item" to="/login" >Login</Link>
        </nav>
      </header>
    );
  };


export default Navbar;