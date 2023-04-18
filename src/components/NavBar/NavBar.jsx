import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ username }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>{" "}
        </li>
        &nbsp; | &nbsp;{" "}
        <li>
          <Link to="/actors">Actors</Link>
        </li>
        <li>{username}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
