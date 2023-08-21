import "./portfolio.css";

import IMG1 from "../../assets/Buta.png";
import IMG2 from "../../assets/Bayburt-Grup.png";
import IMG3 from "../../assets/BaySav.png";
import IMG4 from "../../assets/Burger.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Buta Grup Azerbaijan",
      img: IMG1,
      description:
        "An technology company website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Bootstrap | Javascript",
      link: "https://www.butagrup.com.tr/?lang=en",
      github: "",
    },
    {
      id: 2,
      title: "Bayburt Grup",
      img: IMG2,
      description:
        "This project is a page that reflects information and work of Bayburt Grup Holding.",
      technologies: "Html | CSS | Javascript",
      link: "https://bayburt-grup.netlify.app/",
      github: "https://github.com/camalmikayilov/Bayburt-Grup/tree/main",
    },
    {
      id: 3,
      title: "Bayburt Savunma",
      img: IMG3,
      description: "This project reflects information available to the media about the projects of the Bayburt Defense Company.",
      technologies: "Html | CSS | Javascript",
      link: "https://bayburt-savunma.netlify.app/",
      github: "https://github.com/camalmikayilov/Bayburt-Savunma",
    },
    {
      id: 4,
      title: "Burger Fast Food",
      img: IMG4,
      description:
        "My final project featuring burgers and other related fast food.",
      technologies: "Html | CSS | SASS | JavaScript",
      link: "",
      github: "https://github.com/camalmikayilov/FullProjectBurger",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
