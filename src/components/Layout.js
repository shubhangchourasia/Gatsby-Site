import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn, FaArrowCircleUp } from "react-icons/fa";
import { icon } from "../styles/homepage.module.css";
import "bulma/css/bulma.css";
import AOS from "aos";
import "aos/dist/aos.css";
require("./global.css");
export default function Layout({ children }) {
  const navMargins = {
    marginBottom: "50px",
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="layout">
      <div className="navbar" style={navMargins}>
        <Navbar />
      </div>
      <div className="content">{children}</div>
      <footer className="footer" data-aos="fade-up" data-aos-delay="250">
        <div className="content has-text-centered">
          <p>
            <strong>&copy; 2021 Digital Biz Tech</strong>
          </p>
          <div className="is-flex is-justify-content-center">
            <div className={icon}>
              <FaGithub />
            </div>
            <div className={icon}>
              <FaLinkedinIn />
            </div>
          </div>
          <Link to="#">
            <div className={"is-pulled-right  " + icon}>
              <FaArrowCircleUp />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
