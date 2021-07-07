import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import { Link } from "gatsby";
import {
  themeImg1,
  themeImg2,
  navDarkMode,
} from "../styles/homepage.module.css";

export default function Navbar() {
  // Variables for toggling Navbar
  const hbtoggle1 = React.useRef();
  const hbtoggle2 = React.useRef();

  // Toggle function
  const hamBurgerToggle = () => {
    hbtoggle1.current.classList.toggle("is-active");
    hbtoggle2.current.classList.toggle("is-active");
  };
  // Styling for logo
  const logoStyle = {
    marginTop: "10px",
    maxHeight: "3rem",
  };
  // Init localStorage in development
  // const theme = JSON.parse(localStorage.getItem("darktheme"));

  //  Init localStorage in production
  const theme =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("darktheme"))
      : null;

  // Init darkTheme value in localStorage if not present
  if (!theme) {
    // Development code
    // localStorage.setItem("darktheme", false);
    // Production code
    typeof window !== "undefined"
      ? localStorage.setItem("darktheme", false)
      : null;
  }
  // State for dark theme
  const [darkTheme, setDarkTheme] = useState();

  // Set theme when page loads
  useEffect(() => {
    setDarkTheme(theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    localStorage.setItem("darktheme", !darkTheme);
    window.location.reload();
  };

  // Data for Nav Links
  const navlinks = [
    { tag: "HOME", to: "/" },
    { tag: "ABOUT", to: "/#about" },
    { tag: "SERVICES", to: "/#services" },
    { tag: "CONTACT", to: "/#contact" },
    { tag: "BLOGS", to: "/blogs" },
  ];
  return (
    <div>
      {/* Navbar */}
      <nav
        className={
          "navbar is-fixed-top is-transparent " + (darkTheme ? "is-black" : "")
        }
        role="navigation"
        aria-label="main navigation"
      >
        {/* Brand Logo */}
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/img/Logo.png" alt="Logo" style={logoStyle} />
          </Link>
          <div className={themeImg2}>
            {/* The toggle icons */}
            <div onClick={toggleTheme} aria-hidden="true">
              {darkTheme ? (
                <figure className="image is-32x32">
                  <img src="/img/sun.png" alt="sun" />
                </figure>
              ) : (
                <figure className="image is-32x32">
                  <img src="/img/moon.png" alt="sun" />
                </figure>
              )}
            </div>
          </div>
          {/* Hamburger Button */}
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
        {/* Links of Navbar */}
        <div
          className={"navbar-menu " + (darkTheme ? "has-background-black" : "")}
          ref={hbtoggle2}
        >
          <div className="navbar-end mr-6 ">
            <div className={themeImg1}>
              {/* The toggle icons */}
              <div onClick={toggleTheme} aria-hidden="true">
                {darkTheme ? (
                  <figure className="image is-32x32">
                    <img src="/img/sun.png" alt="sun" />
                  </figure>
                ) : (
                  <figure className="image is-32x32">
                    <img src="/img/moon.png" alt="sun" />
                  </figure>
                )}
              </div>
            </div>
            {/* Links Loop */}
            {navlinks.map((link) => (
              <Link
                to={link.to}
                key={link.tag}
                className={
                  "navbar-item " +
                  (darkTheme ? "has-text-white " : "") +
                  (darkTheme ? navDarkMode : "")
                }
              >
                {link.tag}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
