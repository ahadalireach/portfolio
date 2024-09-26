/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Gher.com",
    description:
      "This is a platform developed for buying, selling, and discovering properties with advanced filtering and property management.",
    url: "https://gher-com.vercel.app",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Goal Pulse",
    description:
      "This is a platform to manage your goals effortlessly, designed for goal-oriented individuals.",
    url: "https://goalpulse.vercel.app",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Build Khalafat",
    description:
      "This is a platform developed to support Palestine, discovering alternatives to Israeli products, and volunteer sign-ups.",
    url: "https://buildkhalafat.com",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Roomista",
    description:
      "This is a platform developed for discovering rooms with advanced filtering options.",
    url: "https://roomista.netlify.app",
    category: "frontend",
  },
  {
    id: 5,
    title: "The Fit Club",
    description:
      "This is a platform tailored for fitness enthusiasts, offering dynamic and engaging content.",
    url: "https://thefitclub-web.netlify.app",
    category: "frontend",
  },
  {
    id: 6,
    title: "Color Craft",
    description:
      "This is a platform designed to help designers find colors with different transparency levels.",
    url: "https://colorcraft-web.netlify.app/",
    category: "frontend",
  },
];

const Projects = () => {
  const projectsNav = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === item.name)
      );
    }
  }, [item]);
  return (
    <section className="section portfolio__projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <div>
        <div className="projects__filters">
          {projectsNav.map((navText, index) => {
            return (
              <span
                className={
                  item.name === navText
                    ? "active__filters-item projects__filters-item"
                    : "projects__filters-item"
                }
                key={index}
                onClick={() => setItem({ name: navText })}
              >
                {navText}
              </span>
            );
          })}
        </div>
        <div className="projects__container container grid">
          {projects.map(({ id, title, url, description }) => {
            return (
              <div class="card" key={id}>
                <div class="content">
                  <div class="h6">{title}</div>
                  <p>{description}</p>
                  <a href={url} target="_blank" className="project__button">
                    Demo{" "}
                    <i className="bx bx-right-arrow-alt project__button-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
