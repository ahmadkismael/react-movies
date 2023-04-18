import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/movies">Movies</Link> &nbsp; | &nbsp;{" "}
      <Link to="/actors">Actors</Link>
    </nav>
  );
};

export default NavBar;
