/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      url: "#about",
      text: "About",
    },
    {
      id: 2,
      url: "#skills",
      text: "Skills",
    },
    {
      id: 3,
      url: "#portfolio",
      text: "Projects",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ahad Ali</h1>
        <ul className="footer__list">
          {footerData.map((item) => (
            <li key={item.id} className="footer__item">
              <a href={item.url} className="footer__link">
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/ahad.x.ali"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/ahad.x.ali"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com/ahad.x.ali"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">
          © {new Date().getFullYear()} Ahad Ali. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
