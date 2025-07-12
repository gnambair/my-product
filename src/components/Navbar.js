import React from "react";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${
        props.toggleDark ? "light" : "dark"
      }`}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active text-${
                  props.toggleDark ? "dark" : "light"
                }`}
                aria-current="page"
                href="/"
              >
                Welcome to the Laptop shop!
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onChange={props.toggleSwitch}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label
              className={`form-check-label text-bg-${
                props.toggleDark ? "light" : "dark"
              }`}
              htmlFor="switchCheckDefault"
            >
              Enabled Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
