import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [activeQualification, setActiveQualification] = useState(1);

  const handleQualification = (id) => {
    setActiveQualification(id);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              activeQualification === 1 ? "qualification__active" : ""
            }`}
            onClick={() => handleQualification(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              activeQualification === 2 ? "qualification__active" : ""
            }`}
            onClick={() => handleQualification(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeQualification === 1 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BS in Computer Science</h3>
                <span className="qualification__subtitle">
                  University of South Asia, Lahore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data qualification__data-right">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Fsc (Pre-Engineering)</h3>
                <span className="qualification__subtitle">
                  Govt Islamia College Civil Lines, Lahore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2020 - 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${
              activeQualification === 2 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data qualification__data-right">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Upwork</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2024 - Present
                </div>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mern Stack Developer</h3>
                <span className="qualification__subtitle">Fiverr</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
