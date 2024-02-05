import React from "react";
import Link from "next/link";

const ProjectCard = ({ grid, data }) => {
  const { imageUrl, title, categories } = data;

  return (
    <div
      className={`${
        grid === 3
          ? "col-lg-4 col-md-6"
          : grid === 2
          ? "col-md-6"
          : "col-12"
      } items ${categories.join(" ")} wow fadeInUp`}
      data-wow-delay=".4s"
    >
      <div className="item-img">
        <Link href={`/project-details2/project-details2-dark`}>
          <a className="imago wow">
            <img src={imageUrl} alt="image" />
            <div className="item-img-overlay"></div>
          </a>
        </Link>
      </div>
      <div className="cont">
        <h6>{title}</h6>
        <span>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <Link href={`/${category.toLowerCase()}/${category.toLowerCase()}-dark`}>
                <a>{category}</a>
              </Link>
              {index < categories.length - 1 && ", "}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;