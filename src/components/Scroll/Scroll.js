/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./Scroll.css";

const Scroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollup = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        scrollup.classList.add("show-scrollup");
      } else {
        scrollup.classList.remove("show-scrollup");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon" />
    </a>
  );
};

export default Scroll;
