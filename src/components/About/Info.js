import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award" />
        <h3 className="about__title">Experience</h3>
        <p className="about__subtitle">1 Year + Working</p>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt" />

        <h3 className="about__title">Completed</h3>
        <p className="about__subtitle">5+ Projects</p>
      </div>
      <div className="about__box">
        <i className="bx bx-smile" />

        <h3 className="about__title">Happy</h3>
        <p className="about__subtitle">Clients 4+</p>
      </div>
    </div>
  );
};

export default Info;
