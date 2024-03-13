/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import ProjectCard from "../projectCard/projectCard.js";
import projectsData from "../../data/projects.json";

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                Our Recent Web Design &amp; <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".Web">Web</span>
              <span data-filter=".Mobile">Mobile App</span>
              <span data-filter=".Blockchain">Blockchain</span>
              <span data-filter=".AI">AI</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="row">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} grid={grid} data={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
