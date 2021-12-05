import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <NavLink exact to="/">
      <div className="navbar-brand mr-5">
        <h1>Github Profile Viewer</h1>
      </div>
    </NavLink>
  </nav>
);
