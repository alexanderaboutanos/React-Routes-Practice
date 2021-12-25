/** @format */

import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ names }) => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {names.map((n) => {
        return (
          <NavLink exact to={`/dogs/${n.toString().toLowerCase()}`}>
            {n}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
