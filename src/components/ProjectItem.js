import React from "react";
import { Link } from "react-router-dom";
import ProjectImg from "../assets/images/projectImg.png";
import styledComponents from "styled-components";

const ProjectItemStyles = styledComponents.div`
.projectItem__img{
    width: 100%;
    height: 400px;
    overfolw: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img{
        height: 100%;
    }
}
.projectItem__info{
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
}
.projectItem__title{
    font-size: 2.2rem;
}
.projectItem_descrip{
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
}
@media only screen and (max-width: 768px){
    .projectItem__img{
        height: 350px;
    }
}
.projectButton{
  display: inline-block;
  font-size: 1.8rem;
  text-decoration: underline;
  margin: 2rem 0;
  color: royalblue;
}
`;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "title title tile description",
  link,
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__descrip">{desc}</p>
        {link && (
          <a
            className="projectButton"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Open Project
          </a>
        )}
      </div>
    </ProjectItemStyles>
  );
}
