import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="dailyfood" to="/dailyfood">
        Daily Food
      </Link>
      <Link className="meals" to="/meals">
        Meals
      </Link>
    </div>
  );
};

export default Navbar;
