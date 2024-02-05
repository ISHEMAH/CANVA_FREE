/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import ProjectCard from "../projectCard/projectCard.js";

const projectsData = [
  {
    imageUrl: "https://example.com/creative1.jpg",
    title: "Artistic Expressions",
    categories: ["Creative", "Design", "WordPress", "Graphic"],
  },
  {
    imageUrl: "https://example.com/creative2.jpg",
    title: "Imagination Unleashed",
    categories: ["Creative", "Design", "WordPress", "Graphic"],
  },
  {
    imageUrl: "https://example.com/creative3.jpg",
    title: "Innovative Creations",
    categories: ["Creative", "Design", "WordPress", "Graphic"],
  },
  // Web projects
  {
    imageUrl: "https://example.com/web1.jpg",
    title: "Responsive Web Design",
    categories: ["Web"],
  },
  {
    imageUrl: "https://example.com/web2.jpg",
    title: "E-Commerce Platform",
    categories: ["Web"],
  },
  {
    imageUrl: "https://example.com/web3.jpg",
    title: "User-Friendly Interfaces",
    categories: ["Web"],
  },
  // Mobile projects
  {
    imageUrl: "https://example.com/mobile1.jpg",
    title: "Mobile App Prototype",
    categories: ["Mobile"],
  },
  {
    imageUrl: "https://example.com/mobile2.jpg",
    title: "Android Development",
    categories: ["Mobile"],
  },
  {
    imageUrl: "https://example.com/mobile3.jpg",
    title: "iOS App Design",
    categories: ["Mobile"],
  },
  // Blockchain projects
  {
    imageUrl: "https://example.com/blockchain1.jpg",
    title: "Decentralized Solutions",
    categories: ["Blockchain"],
  },
  {
    imageUrl: "https://example.com/blockchain2.jpg",
    title: "Smart Contracts Implementation",
    categories: ["Blockchain"],
  },
  {
    imageUrl: "https://example.com/blockchain3.jpg",
    title: "Crypto Wallet Development",
    categories: ["Blockchain"],
  },
  // AI projects
  {
    imageUrl: "https://example.com/ai1.jpg",
    title: "Machine Learning Algorithms",
    categories: ["AI"],
  },
  {
    imageUrl: "https://example.com/ai2.jpg",
    title: "Natural Language Processing",
    categories: ["AI"],
  },
  {
    imageUrl: "https://example.com/ai3.jpg",
    title: "Computer Vision Applications",
    categories: ["AI"],
  },
  // Add more project data as needed
];

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
              <span data-filter=".mobile">Mobile App</span>
              <span data-filter=".blockchain">Blockchain</span>
              <span data-filter=".ai">AI</span>
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
