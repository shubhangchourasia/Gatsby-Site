import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn, FaArrowCircleUp } from "react-icons/fa";
import {
  iconDark,
  iconLight,
  bodyHeight,
} from "../styles/homepage.module.css";
import "bulma/css/bulma.css";
require("./global.css");
export default function Layout({ children }) {
  const navMargins = {
    marginBottom: "50px",
  };

const theme =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("darktheme"))
    : null;
 const [darkTheme, setDarkTheme] = useState();
 useEffect(() => {
   setDarkTheme(theme);
 }, [theme]);

  return (
    <div className={"layout " + (darkTheme ? "has-background-black" : "")}>
      <div
        className={"navbar " + (darkTheme ? "is-black" : "")}
        style={navMargins}
      >
        <Navbar />
      </div>

      <div className={"content " + bodyHeight}>{children}</div>

      <footer
        className={
          " footer " +
          (darkTheme ? "has-background-black has-text-white" : "")
        }
      >
        <div className="content has-text-centered">
          <p className="has-text-weight-bold">&copy; 2021 Digital Biz Tech</p>
          <div className="is-flex is-justify-content-center">
            <div className={darkTheme ? iconDark : iconLight}>
              <FaGithub />
            </div>
            <div className={darkTheme ? iconDark : iconLight}>
              <FaLinkedinIn />
            </div>
          </div>
          <Link to="#">
            <div
              className={
                "is-pulled-right  " + (darkTheme ? iconDark : iconLight)
              }
            >
              <FaArrowCircleUp />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
