import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import { Link } from "gatsby";
import {
  themeImg1,
  themeImg2,
  navDarkMode,
} from "../styles/homepage.module.css";

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
  const theme =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("darktheme")) 
      : null;
  if (!theme) {
   
     typeof window !== "undefined"
       ?  localStorage.setItem("darktheme", false)
       : null;
  }
  const [darkTheme,setDarkTheme] = useState();
  useEffect(() => {
    setDarkTheme(theme)
  }, [theme]);

  const toggleTheme = () => {
    localStorage.setItem("darktheme", !darkTheme);
    window.location.reload();
  };

  return (
    <div>
      <nav
        className={
          "navbar is-fixed-top is-transparent " + (darkTheme ? "is-black" : "")
        }
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/img/Logo.png" alt="Logo" style={logoStyle} />
          </Link>
          <div className={themeImg2}>
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
        <div
          className={"navbar-menu " + (darkTheme ? "has-background-black" : "")}
          ref={hbtoggle2}
        >
          <div className="navbar-end mr-6 ">
            <div className={themeImg1}>
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
            <Link
              to="/"
              className={
                "navbar-item " +
                (darkTheme ? "has-text-white " : "") +
                (darkTheme ? navDarkMode : "")
              }
            >
              HOME
            </Link>

            <Link
              to="/#about"
             className={
                "navbar-item " +
                (darkTheme ? "has-text-white " : "") +
                (darkTheme ? navDarkMode : "")
              }
            >
              ABOUT
            </Link>
            <Link
              to="/#services"
               className={
                "navbar-item " +
                (darkTheme ? "has-text-white " : "") +
                (darkTheme ? navDarkMode : "")
              }
            >
              SERVICES
            </Link>
            <Link
              to="/#contact"
             className={
                "navbar-item " +
                (darkTheme ? "has-text-white " : "") +
                (darkTheme ? navDarkMode : "")
              }
            >
              CONTACT
            </Link>
            <Link
              to="/blogs"
               className={
                "navbar-item " +
                (darkTheme ? "has-text-white " : "") +
                (darkTheme ? navDarkMode : "")
              }
            >
              BLOGS
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
