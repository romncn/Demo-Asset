import React from "react";

function AssetCard(props) {
  return (
    <div {...props}>
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.image} class="card-img-top" alt={props.title} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.children}
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default AssetCard;
