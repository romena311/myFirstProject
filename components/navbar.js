import React, { useState, useEffect } from "react";
import IconMenu from "./menu";
import styles from "../styles/navbar.module.css";

function Navbar() {
  const [myNavbar, setNavbar] = useState(false);
  const [myBtn, setButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    window.addEventListener("scroll", changeButton);
  }, []);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeButton = () => {
    if (window.scrollY >= 80) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  return (
    <>
      <nav
        id="topNav"
        className={
          myNavbar
            ? "navbar navbar-expand-lg myNavbar scrolled fixed-top py-0 justify-content-around"
            : "navbar navbar-expand-lg myNavbar fixed-top py-0 justify-content-around"
        }
      >
        <div className="container-fluid">
          <div className="navbarBrand px-4">
            <a href="#" className="navbar-brand text-center tColor">
              <h5>Project Next.js</h5>
            </a>
          </div>
          <button
            className={
              myBtn
                ? "navbar-toggler d-block d-lg-none btn btn-outline-light mx-4"
                : "navbar-toggler d-block d-lg-none btn btn-outline-light mx-4"
            }
            type="button"
            data-toggle="collapse"
            data-target="#maincontent"
            aria-controls="maincontent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <IconMenu />
          </button>
          <div id="maincontent" className="navbar-collapse collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#introduction" className="nav-link acive px-4 tColor">
                  Introduction
                </a>
              </li>
              <li className="nav-item">
                <a href="#work" className="nav-link px-4 tColor">
                  My Works
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link px-4 tColor">
                  Contact Me
                </a>
              </li>
            </ul>
            <ul className={`${styles.login} navbar-nav`}>
              <li className="nav-item text-nowrap text-lg-center py-1">
                <button
                  className={
                    myBtn
                      ? "btn btn-outline-light px-2 mx-4"
                      : "btn btn-outline-light px-2 mx-4"
                  }
                  type="button"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  {" "}
                  Login{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
