import React from "react";
import OurProjectCard from "./Card/OurProject-card";

import data from "../../json/projects.json"

function ShowOurProject() {
  return (
    <div>
      <h4>โปรเจคที่เคยทำ</h4>
      <div className="col-12 px-0">
        <div className="row">
          {data.map((condo, key) => {
            return (
              <OurProjectCard
                className="col-12 col-sm-6 col-lg-4 pt-3"
                image={`${condo.id}/${condo.imagecover}`}
                title={condo.title}
                id={condo.id}
              >
                <p>{condo.content}</p>
              </OurProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowOurProject;
