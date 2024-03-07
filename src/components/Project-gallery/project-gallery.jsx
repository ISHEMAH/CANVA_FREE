import React from "react";

const ProjectGallery = ({ projectGallery }) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <a href="#" className="col-md-3 popimg">
            <img alt="" src={projectGallery.gallery[0]} />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src={projectGallery.gallery[1]} />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src={projectGallery.gallery[2]} />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src={projectGallery.gallery[3]} />
          </a>
          <a href="#" className="col-md-12 popimg">
            <img alt="" src={projectGallery.gallery[4]}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
