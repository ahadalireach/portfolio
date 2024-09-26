import React, { useState } from "react";
import "./Skills.css";

const skillsData = [
  {
    id: 1,
    title: "Programming Languages",
    skills: [
      { name: "C/C++", level: 80 },
      { name: "Javascript", level: 85 },
      { name: "C#", level: 40 },
    ],
    icon: "uil uil-brackets-curly",
  },
  {
    id: 2,
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React JS", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Next JS", level: 60 },
    ],
    icon: "uil uil-server-network",
  },
  {
    id: 3,
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Oracle", level: 80 },
    ],
    icon: "uil uil-database",
  },
  {
    id: 4,
    title: "Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "Visual Studio Code", level: 90 },
      { name: "Postman", level: 80 },
    ],
    icon: "uil uil-setting",
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleSkills = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">My technical expertise</span>
      <div className="skills__container container">
        <div className="skills__column">
          {skillsData.slice(0, 2).map((skill) => {
            const { id, title, skills, icon } = skill;
            const isOpen = openIndex === id;

            return (
              <div key={id} className={`skill ${isOpen ? "open" : ""}`}>
                <div className="skill__top" onClick={() => toggleSkills(id)}>
                  <h3 className="skill__title">
                    <i className={`skill__title-icon ${icon}`} />
                    <span className="skill__title-text">{title}</span>
                  </h3>
                  {isOpen ? (
                    <i className="uil uil-angle-up skill__icon" />
                  ) : (
                    <i className="uil uil-angle-down skill__icon" />
                  )}
                </div>
                <ul className="skill__skills">
                  {skills.map((singleSkill, idx) => (
                    <li key={idx} className="skill__item">
                      <div className="skill__info">
                        <span className="skill__name">{singleSkill.name}</span>
                        <span className="skill__percentage">
                          {singleSkill.level}%
                        </span>
                      </div>
                      <div className="skill__level">
                        <div
                          className="skill__level-bar"
                          style={{ width: `${singleSkill.level}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="skills__column">
          {skillsData.slice(2, 4).map((skill) => {
            const { id, title, skills, icon } = skill;
            const isOpen = openIndex === id;

            return (
              <div key={id} className={`skill ${isOpen ? "open" : ""}`}>
                <div className="skill__top" onClick={() => toggleSkills(id)}>
                  <h3 className="skill__title">
                    <i className={`skill__title-icon ${icon}`} />
                    <span className="skill__title-text">{title}</span>
                  </h3>
                  {isOpen ? (
                    <i className="uil uil-angle-up skill__icon" />
                  ) : (
                    <i className="uil uil-angle-down skill__icon" />
                  )}
                </div>
                <ul className="skill__skills">
                  {skills.map((singleSkill, idx) => (
                    <li key={idx} className="skill__item">
                      <div className="skill__info">
                        <span className="skill__name">{singleSkill.name}</span>
                        <span className="skill__percentage">
                          {singleSkill.level}%
                        </span>
                      </div>
                      <div className="skill__level">
                        <div
                          className="skill__level-bar"
                          style={{ width: `${singleSkill.level}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
