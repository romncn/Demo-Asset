import React from "react";

import ProjectCard from "./Card/OurProject-card";
import data from "../../json/projects.json";

export default function LastestProjects(props) {
  let projects = data.filter((project) => project.title !== props.id);
  projects = projects.slice(projects.length-4, projects.length-1);
  return (
    <div {...props}>
      <h4>ผลงานล่าสุด</h4>
      <div className="col-12 px-0">
        <div className="row">
          {projects.map((project) => {
            return (
              <ProjectCard
                className="col-4"
                image={`${project.id}/${project.imagecover}`}
                title={project.title}
                id={project.id}
              >
                <p>{project.content}</p>
              </ProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
