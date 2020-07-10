import React from "react";
import { Link } from "react-router-dom";

function OurProjectCard(props) {
  return (
    <div {...props}>
      <div class="card" style={{ width: "100%" }}>
        <img
          src={`/images/projects/${props.image}`}
          class="card-img-top"
          alt={props.title}
        />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.children} </p>
          <div className="text-center">
            <Link to={`/project/${props.id}`}>
              <button class="btn btn-dark">ข้อมูลเพิ่มเติม</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjectCard;
