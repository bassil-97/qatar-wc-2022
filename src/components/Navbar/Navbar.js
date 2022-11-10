import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" data-aos="fade-left">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/groups">
                match center
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fixtures" className="nav-link">
                Fixtures
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stadiums" className="nav-link">
                Stadiums
              </Link>
            </li>
          </ul>
          <button type="button" className="btn primary-btn ms-5">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
