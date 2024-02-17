import React from "react";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center p-4">
      <Link
        to="/"
        className="flex items-center no-underline text-black"
        aria-label="Go to home page"
      >
        <img src={logo} className="w-16 h-16 mr-4" alt="Spotzer Network Logo" />
        <h1 className="text-3xl">Spotzer Network</h1>
      </Link>
    </header>
  );
};

export default Header;
