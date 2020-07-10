import React, { useState, useEffect, useRef } from "react";
import "../css/App.css";

import MenuNavbar from "./Menu-Navbar";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else if (window.pageYOffset > 50) {
        setScrolling(true);
      }
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        zIndex: "100",
        width: "100vw",
      }}
    >
      <div className="d-none d-lg-block px-5">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid justify-content-center">
            <div className={`${scrolling ? "" : "pt-3"}`}>
              <h3>Demo Asset</h3>
            </div>
            <div className={`${scrolling ? "" : "d-none"}`}>
              <MenuNavbar />
            </div>
          </div>
        </nav>
        <div
          className={`${
            scrolling ? "d-none" : "d-flex justify-content-center"
          }`}
        >
          <MenuNavbar />
        </div>
      </div>
      <div className="d-lg-none">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid justify-content-center">
            <div>
              <h3>Demo Asset</h3>
            </div>
          </div>
          <div className="container-fluid justify-content-center">
            <div>
              <MenuNavbar />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
