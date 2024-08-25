import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Blog Application</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts/form">Create Post</Link>
      </nav>
    </header>
  );
};

export default Header;
