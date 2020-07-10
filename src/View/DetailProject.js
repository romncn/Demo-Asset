import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LatestProjects from "../components/ShowComponents/LatestProjects";
import data from "../json/projects.json";

export default function DetailProjectPage() {
  const [project, setProject] = useState({});
  const [modal, setModal] = useState({});
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    setProject(data[id - 1]);
  }, [id]);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid px-5">
          <Link to={"/"}>
            <h3>Demo Asset</h3>
          </Link>
        </div>
      </nav>
      <div className="container py-3 px-0 px-sm-5">
        <img
          src={`/images/projects/${project.id}/${project.imagecover}`}
          style={{ width: "100%", height: "40%", objectFit: "cover" }}
        />
        <div className="pt-3">
          <h3>{project.title}</h3>
          <p>{project.content}</p>
          <p>ประเภท: {project.type}</p>
        </div>
        <div className="col-12 px-0">
          {project.images ? (
            <div>
              <p>ภาพประกอบ ( {project.images.length} รูป )</p>
              <div className="row">
                {project.images.map((image, key) => {
                  return (
                    <div key={key} className="col-12 col-sm-4 pt-3">
                      <img
                        onClick={() => setModal({ title: image, image: image })}
                        data-toggle="modal"
                        data-target="#exampleModal"
                        src={`/images/projects/${project.id}/${image}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                      />
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                          <div class="modal-content ">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                {modal.title}
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <img
                                src={`/images/projects/${project.id}/${modal.image}`}
                                style={{
                                  width: "100%",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <LatestProjects className="pt-5" id={id} />
      </div>
    </div>
  );
}
