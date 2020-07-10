import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import data from "../json/projects.json";

export default function DetailProjectPage() {
  const [project, setProject] = useState({});
  let { id } = useParams();
  useEffect(() => {
    setProject(data[id - 1]);
  }, []);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid px-5">
          <Link to={"/"}>
            <h3>Demo Asset</h3>
          </Link>
        </div>
      </nav>
      <div className="container pt-3">
        <img
          src={`/images/projects/${project.id}/${project.imagecover}`}
          style={{ width: "100%", height: "40%", objectFit: "cover" }}
        />
        <div className="pt-3">
          <h3>{project.title}</h3>
          <p>{project.content}</p>
        </div>
        <div>
          <div className="col- px-0">
            <div className="row">
              {project.images
                ? project.images.map((image, key) => {
                    return (
                      <div key={key} className="col-12 col-sm-6 pt-3">
                        <img
                          src={`/images/projects/${project.id}/${image}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            cursor: "poiter",
                          }}
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
