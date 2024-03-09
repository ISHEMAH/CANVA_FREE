import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectDate from "../../data/project-details2.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";

const ProjectDetails2Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const router = useRouter();
  const { id } = router.query;
  // console.log("ID:", id);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  
  for (var i = 0; i < ProjectDate.length; i++) {
    if (ProjectDate[i].id == id) {
      return (
        <DarkTheme>
          <Navbar nr={navbarRef} lr={logoRef} />
          <div className="wrapper">
            <ProjectDetails2Header projectHeaderData={ProjectDate[i]} />
            <ProjectIntroduction projectIntroductionData={ProjectDate[i].intro} />
            <ProjectGallery projectGallery={ProjectDate[i]} />
            <ProjectDescription projectDescriptionData={ProjectDate[i].description} />
            <ProjectVideo projectVideoDate={ProjectDate[i]} />
            <NextProject />
            <Footer />
          </div>
        </DarkTheme>
      );
    }
  }
  

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <p>No such project</p>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
