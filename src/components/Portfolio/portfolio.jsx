/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import ProjectCard from "../projectCard/projectCard.js";

const projectsData = [
  {
    id: 1,
    imageUrl: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/64df8f9aaa825a953d1a05c6_artworksgallery1.jpeg",
    title: "Artistic Expressions",
    categories: ["Creative", "Design", "WordPress", "Graphic"],
  },
  {
    id: 2,
    imageUrl: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/65524abffc1efd90c8dd0eb3_screenshot1.jpeg",
    title: "Imagination Unleashed",
    categories: ["Creative", "Design", "WordPress", "Graphic"],
  },
  {
    id: 3,
    imageUrl: "https://www.pixelmotives.com/wp-content/uploads/2023/06/portfolio-the-a-list-clinic-525x420.jpg",
    title: "Innovative Creations",
    categories: ["Creative", "Design", "WordPress", "Graphic"],
  },
  // Web projects
  {
    id: 4,
    imageUrl: "https://tweakyourbiz.com/wp-content/uploads/2022/05/shutterstock_174574130.jpg",
    title: "Responsive Web Design",
    categories: ["Web"],
  },
  {
    id: 5,
    imageUrl: "https://img.freepik.com/premium-vector/ecommerce-platform-website-landing-page-concept_1234-408.jpg",
    title: "E-Commerce Platform",
    categories: ["Web"],
  },
  {
    id: 6,
    imageUrl: "https://geniusee.com/storage/app/media/blog104/blog104_6.jpg",
    title: "User-Friendly Interfaces",
    categories: ["Web"],
  },
  // Mobile projects
  {
    id: 7,
    imageUrl: "https://i.pinimg.com/736x/47/cc/38/47cc381808321e149adf815d3701eb8d.jpg",
    title: "Mobile App Prototype",
    categories: ["Mobile"],
  },
  {
    id: 8,
    imageUrl: "https://i.pinimg.com/736x/ff/a7/c0/ffa7c00a341b27b9197d112b73e2bd6b.jpg",
    title: "Android Development",
    categories: ["Mobile"],
  },
  {
    id: 9,
    imageUrl: "https://i.pinimg.com/736x/ca/ba/45/caba456db19dca113ca53e115e21570c.jpg",
    title: "iOS App Design",
    categories: ["Mobile"],
  },
  // Blockchain projects
  {
    id: 10,
    imageUrl: "https://cdn.dribbble.com/users/1728196/screenshots/17151023/media/2bbfa4a9d9687dc0282d372cb775bcff.png?resize=400x0",
    title: "Decentralized Solutions",
    categories: ["Blockchain"],
  },
  {
    id: 11,
    imageUrl: "https://img.freepik.com/premium-vector/blockchain-platform-creative-landing-website-page-vector-illustration_541075-739.jpg?w=2000",
    title: "Smart Contracts Implementation",
    categories: ["Blockchain"],
  },
  {
    id: 12,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8D0IItqY4-7F90oePJCJwibU-wH1sMaMuDevHUXuXQc2dI_VeyH42fP44ibDHeWy_Vc&usqp=CAU",
    title: "Crypto Wallet Development",
    categories: ["Blockchain"],
  },
  // AI projects
  {
    id: 14,
    imageUrl: "https://cdn.dribbble.com/userupload/8049330/file/original-f16c2a1b36c992b32a4e1075dcbf4352.jpg?resize=400x0",
    title: "Machine Learning Algorithms",
    categories: ["AI"],
  },
  {
    id: 13,
    imageUrl: "https://blog.hubspot.com/hs-fs/hubfs/Screenshot%202023-04-11%20at%2012.33.07%20PM.jpg?width=650&height=325&name=Screenshot%202023-04-11%20at%2012.33.07%20PM.jpg",
    title: "Natural Language Processing",
    categories: ["AI"],
  },
  {
    id: 15,
    imageUrl: "https://usercontent.one/wp/www.insidr.ai/wp-content/uploads/2023/04/Writesonic-website-Insidr.ai-ai-tools-768x372.png?media=1705425533",
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
