import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-16 px-10 bg-amber-100 flex justify-between items-center">
      <div className="text-2xl">Logo</div>
      <nav className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
    </header>
  );
}

export default Header;
