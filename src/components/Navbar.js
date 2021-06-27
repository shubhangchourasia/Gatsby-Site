import React from "react";
import "bulma/css/bulma.css";
import { Link } from "gatsby";
export default function Navbar() {
  const hbtoggle1 = React.useRef();
  const hbtoggle2 = React.useRef();
  const hamBurgerToggle = () => {
    hbtoggle1.current.classList.toggle("is-active");
    hbtoggle2.current.classList.toggle("is-active");
  };
  const logoStyle = {
    marginTop: "10px",
    maxHeight: "3rem",
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top is-transparent "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="/img/Logo.png"
              width="auto"
              height="250%"
              alt="Logo"
              style={logoStyle}
            />
          </Link>
          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            aria-hidden="true"
            ref={hbtoggle1}
            onClick={hamBurgerToggle}
            style={logoStyle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className="navbar-menu" ref={hbtoggle2}>
          <div className="navbar-end mr-6">
            <Link to="/" className="navbar-item">
              HOME
            </Link>

            <a href="/#about" className="navbar-item">
              ABOUT
            </a>
            <a href="/#services" className="navbar-item">
              SERVICES
            </a>
            <a href="/#contact" className="navbar-item">
              CONTACT
            </a>
            <Link to="/blogs" className="navbar-item">
              BLOGS
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
